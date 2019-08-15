export function renderPlaceholder(template, data) {
  var s = template;
  for(var key in data)
    s = s.replace(new RegExp("\\{" + key + "\\}", "g"), data[key]);
  return s;

}
export const getCookieInServer = (req, key) => {
  if (!req.headers.cookie) return
  const obj = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`))
  if (!obj) return
  const value = obj.split('=')[1]
  return value
}
