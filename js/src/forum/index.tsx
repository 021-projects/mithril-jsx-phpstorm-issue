import app from 'flarum/forum/app'
import { extend } from 'flarum/common/extend'
import TextEditor from 'flarum/common/components/TextEditor'
import TextEditorButton from 'flarum/common/components/TextEditorButton'

app.initializers.add('021/foo', () => {
  extend(TextEditor.prototype, 'toolbarItems', items => {
    items.add(
      'scheduled-posts',
      <TextEditorButton icon='fas fa-clock'>Test</TextEditorButton>
    )
  })
})
