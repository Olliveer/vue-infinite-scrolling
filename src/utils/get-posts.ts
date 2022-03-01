const names = ['Jane', 'John', 'Jim'];

function getPosts(size: number) {
  const ret = [];

  for (let i = 0; i < size; i += 1) {
    ret.push({
      id: i + new Date().getTime(),
      author: names[i % names.length],
      content:
        'attrs and slots are stateful objects that are always updated when the component itself is updated. This means you should avoid destructuring them and always reference properties as attrs.x or slots.x.',
    });
  }

  return ret;
}

export { getPosts };
