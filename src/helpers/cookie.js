export function createCookie(name, value, days) {
  var expires;
  if (days) {
    expires = "; expires=" + daysExpire(days);
  } else {
    expires = 0;
  }
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

export function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1,c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length,c.length);
    }
  }
  return null;
}

function daysExpire(days) {
  return  Math.round((new Date().getTime() + (days * 24 * 60 * 60 * 1000))/1000.0);
}

export function cookieSetEndPoint(site, bool) {
  return `https://${API_ENV}cookie.${site}?k=cookie_consent&v=${bool}&expires=${daysExpire(90)}`;
}
