// Beach Star Hotel — small site behaviours

// Footer year
document.querySelectorAll('#year').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// Mobile nav toggle
var navToggle = document.querySelector('.nav-toggle');
var mainNav = document.getElementById('main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', function () {
    var isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Booking form: submit via fetch so the guest stays on the page
// and sees a confirmation instead of being redirected away.
var form = document.getElementById('booking-form');
if (form) {
  var status = document.getElementById('form-status');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Basic guard: remind whoever deploys this site to set up Formspree
    if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
      status.className = 'form-status error';
      status.textContent = 'Booking form is not fully set up yet — replace YOUR_FORM_ID in contact.html with your Formspree endpoint (see README.md).';
      return;
    }

    var data = new FormData(form);
    var submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' }
    })
      .then(function (response) {
        if (response.ok) {
          status.className = 'form-status success';
          status.textContent = 'Thank you — your request has been sent. We will reply by email to confirm.';
          form.reset();
        } else {
          return response.json().then(function (data) {
            var message = (data && data.errors && data.errors.map(function (e) { return e.message; }).join(', ')) || 'Something went wrong sending your request.';
            status.className = 'form-status error';
            status.textContent = message + ' You can also email us directly at info@beachstarhotel.com.';
          });
        }
      })
      .catch(function () {
        status.className = 'form-status error';
        status.textContent = 'Could not send your request — please email us directly at info@beachstarhotel.com.';
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send booking request';
      });
  });
}
