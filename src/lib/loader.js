export default async function (fileName) {
  const titles = [], contents = [];

  let res = await fetch(fileName);
  res = await res.text();
  res = res
    .split("|")
    .map((x) => x.trim())
    .filter(Boolean);
  for (let i = 0; i < res.length; i++) {
    titles.push(res[i]);
    i++;
    contents.push(
      res[i]
        .split("+")
        .map((x) => x.trim())
        .filter(Boolean)
    );
  }
  return [titles, contents];
}
