var { newFile } = require('./xml_builder.js');

var file = newFile('buildé.xml');

file.content
  .node('racine')
    .node('enfant').attr({foo: 'bar'})
      .node('grandchild', 'grandchild content').attr({baz: 'fizbuzz'})
    .parent()
  .parent()
    .node('sibling', 'with content!');

file.save();
