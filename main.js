/*
      <div class="post" id="p1">
        <div class="topic">
          Testing
        </div>
        <div class="description">
          This is a test
        </div>
        <div class="article">
          Hi it's me
        </div>
      </div>
*/
var posts=[];
var storage=[];

function post(topic, desc, article){
  this.topic = topic;
  this.description = desc;
  this.article = article;
  this.id = posts.length;
  this.data =  "<div class=\"post\" id=\"p"+this.id+"\"><div class="topic">"+this.topic+"</div><div class=\"description\">"+this.description++"</div><div class=\"article\">"+this.article+"</div></div>";
  posts.push(this);
}
