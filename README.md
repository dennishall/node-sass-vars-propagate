# A simple example showing that SCSS vars propagate to imported files.

`$ npm run node-sass-css`
  
runs the node-sass-css compilation task, creates an mb and an fl css file, with different fonts due to the global var propagating to the subsequently imported files.

`$ npm run gulp-sass-css`
  
runs the gulp-sass-css compilation task, creates an mb and an fl css file, with different fonts due to the global var propagating to the subsequently imported files.

Note:

This example is meant to be as simple as possible, so please forgive the simplicity of the build scripts, directory structure, and anything else that bugs you.  Thanks.
