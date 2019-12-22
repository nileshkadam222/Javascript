
// change your workspace path eg = var workspacePath = "D:/my projects/web/POC/nodeOnLocal/project";
var workspacePath = "../../application-core/MainPlatformUI/WebContent/";
var outputPath = "../../application-core/MainPlatformUI/WebContent/resources/min/";


//create babal json
/*var babelFiles = [];
babelFiles = babelFiles.concat(homepagejs, resourcedesignerstandalone, homepageasyncjs);
var mainObj = {};
var options = {};
options.sourceMap = true
mainObj.options = options

for(var i=0;i<babelFiles.length;i++){
	var file = babelFiles[i];
	var tempObj = {};
	var src = [];
	src.push(file);
	tempObj.src = src;
	
	var b = file.split("/")
	var taskName = b[b.length-1];
	tempObj.dest = "dist/"+taskName;
	mainObj[taskName] = tempObj
}
*/




module.exports = function(grunt){
	//read json

var jsMinification = {
      "options" : {
        "transform": [['babelify', { "presets": "es2015" }]],
                "browserifyOptions": {
                    "debug": true
                }
      },
      "homepage" : {
        "src" : ["../project/src/index.js"],
        "dest" : "../project/dist/myproject.js"
      }
    }

    var uglifyData = {
      "options" : {
       	"sourceMap":true
      },
      "homepage" : {
        "src" : ["../project/dist/myproject.js"],
        "dest" : "../project/dist/myproject.min.js"
      }
    }
	  grunt.initConfig({
	  	   copy: {main: {files: [{expand: true, src: ['D:/Workspaces/POC/web/POC/grunt-bable/project/**'], dest: 'src/'}]}},
	  	   //browserify:jsMinification,
		   //uglify : uglifyData
	
	  });
	
	  //load uglify plugin
	  
	  //grunt.loadNpmTasks('grunt-contrib-cssmin');
	  //grunt.loadNpmTasks('grunt-contrib-obfuscator');
	
	  //create default task
	  //grunt.registerTask("default", ["uglify","cssmin"]);
	  //grunt.registerTask("all", ["uglify","cssmin","obfuscator"]);
     grunt.loadNpmTasks('grunt-contrib-copy');
	 //grunt.loadNpmTasks('grunt-browserify');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	  //grunt.loadNpmTasks('grunt-contrib-uglify');
	  
	  //grunt.registerTask("default", ["copy","browserify","uglify"]);
	  grunt.registerTask("default", ["copy"]);
 

};