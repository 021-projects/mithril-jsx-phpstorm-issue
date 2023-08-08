import app from 'flarum/common/app';

app.initializers.add('021/foo', () => {
  console.log('[021/foo] Hello, forum and admin!');
});
