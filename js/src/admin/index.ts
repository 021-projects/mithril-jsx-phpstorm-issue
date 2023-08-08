import app from 'flarum/admin/app';

app.initializers.add('021/foo', () => {
  console.log('[021/foo] Hello, admin!');
});
