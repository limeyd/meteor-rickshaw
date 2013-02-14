Package.describe({
  summary: "JavaScript toolkit for creating interactive real-time graphs"
});

Package.on_use(function (api) {
  api.use('d3', 'client');

  api.add_files('rickshaw/rickshaw.css', 'client');
  api.add_files('rickshaw/rickshaw.js', 'client');
});
