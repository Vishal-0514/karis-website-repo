// Contact form: checks the fields, sends them to the server, and says clearly
// whether it worked. Without JavaScript the email addresses above still work.
(function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var status = document.getElementById('cf-status');
  var button = form.querySelector('button[type="submit"]');

  function say(text, kind) {
    status.textContent = text;
    status.className = 'form-status ' + (kind || '');
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var fields = ['name', 'email', 'message'];
    for (var i = 0; i < fields.length; i++) {
      var input = form.elements[fields[i]];
      input.removeAttribute('aria-invalid');
      if (!input.checkValidity()) {
        input.setAttribute('aria-invalid', 'true');
        input.focus();
        var labels = { name: 'Please enter your name.', email: 'Please enter a valid email address.', message: 'Please write a message of at least 10 characters.' };
        return say(labels[fields[i]], 'error');
      }
    }

    var data = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      topic: form.elements.topic.value,
      message: form.elements.message.value.trim(),
      website: form.elements.website.value,
    };
    button.disabled = true;
    say('Sending… (this can take up to a minute the first time)', '');

    var controller = new AbortController();
    var timer = setTimeout(function () { controller.abort(); }, 75000);
    fetch(form.action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      signal: controller.signal,
    })
      .then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (body) {
          if (!res.ok || !body.success) throw new Error((body.error || 'failed').replace(/^\w+: /, ''));
        });
      })
      .then(function () {
        form.reset();
        say('Thank you. Your message has been sent and we will reply by email.', 'ok');
      })
      .catch(function (err) {
        say((err && err.message && err.message !== 'failed' && err.name !== 'AbortError' ? err.message + ' ' : "Sorry, your message couldn't be sent. ") + 'You can also email us at the address above.', 'error');
      })
      .finally(function () {
        clearTimeout(timer);
        button.disabled = false;
      });
  });
})();
