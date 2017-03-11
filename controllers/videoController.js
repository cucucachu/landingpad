var fs = require('fs');
var mongoose = require('mongoose');
 
//mongoose connect 
mongoose.connect('mongodb://localhost/test');
 
//instantiate mongoose-gridfs 
var gridfs = require('mongoose-gridfs')({
  collection:'attachments',
  model:'Attachment'
});
 
//obtain a model 
Attachment = gridfs.model;
 
//create or save a file 
Attachment.write({
  filename:'The Friends of Eddie Coyle.mp4',
  contentType:'video/mp4'
  },
  fs.createReadStream('/Users/Gregory/Movies/Eddie.mp4'),
  function(error, createdFile){
});
 
//for larger file size 
//read a file and receive a stream 
var stream  = Attachment.readById(<objectid>);
 
//for smaller file size 
//read a file and receive a buffer 
Attachment.readById(<objectid>, function(error, buffer){
});
 
//remove file details and its content from gridfs 
Attachment.unlinkById(<objectid>, function(error, unlinkedAttachment){
});