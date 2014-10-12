Ember.TEMPLATES["todos"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("All");
  }

function program3(depth0,data) {
  
  var buffer = '';
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Active");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Completed");
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<button id=\"clear-completed\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "clearCompleted", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Clear completed (");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "completed", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(")</button>");
  return buffer;
  }

  data.buffer.push("<section id=\"todoapp\"><header id=\"header\"><h1>todos</h1>");
  hashContexts = {'id': depth0,'action': depth0,'type': depth0,'placeholder': depth0,'valueBinding': depth0};
  hashTypes = {'id': "STRING",'action': "STRING",'type': "STRING",'placeholder': "STRING",'valueBinding': "STRING"};
  options = {hash:{
    'id': ("new-todo"),
    'action': ("createTodo"),
    'type': ("text"),
    'placeholder': ("What needs to be done?"),
    'valueBinding': ("newTitle")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</header><section id=\"main\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  hashContexts = {'id': depth0,'type': depth0,'checked': depth0};
  hashTypes = {'id': "STRING",'type': "STRING",'checked': "ID"};
  options = {hash:{
    'id': ("toggle-all"),
    'type': ("checkbox"),
    'checked': ("allAreDone")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("</section><footer id=\"footer\"><span id=\"todo-count\"><strong>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "remaining", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</strong>&nbsp;");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "inflection", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("&nbsp;left</span><ul id=\"filters\"><li>");
  hashContexts = {'activeClass': depth0};
  hashTypes = {'activeClass': "STRING"};
  options = {hash:{
    'activeClass': ("selected")
  },inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "todos.index", options) : helperMissing.call(depth0, "link-to", "todos.index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li><li>");
  hashContexts = {'activeClass': depth0};
  hashTypes = {'activeClass': "STRING"};
  options = {hash:{
    'activeClass': ("selected")
  },inverse:self.program(3, program3, data),fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "todos.active", options) : helperMissing.call(depth0, "link-to", "todos.active", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li><li>");
  hashContexts = {'activeClass': depth0};
  hashTypes = {'activeClass': "STRING"};
  options = {hash:{
    'activeClass': ("selected")
  },inverse:self.program(3, program3, data),fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "todos.completed", options) : helperMissing.call(depth0, "link-to", "todos.completed", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li></ul>");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "hasCompleted", {hash:{},inverse:self.program(3, program3, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("<footer id=\"info\"><p>Double-click to edit a todo</p></footer></footer></section>");
  return buffer;
  
});

Ember.TEMPLATES["todos/index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("<li ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  stack1 = helpers['bind-attr'].call(depth0, {hash:{
    'class': ("isCompleted:completed isEditing:editing")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>");
  return buffer;
  }
function program2(depth0,data) {
  
  var stack1, hashContexts, hashTypes, options;
  hashContexts = {'class': depth0,'value': depth0,'focus-out': depth0,'insert-newline': depth0};
  hashTypes = {'class': "STRING",'value': "ID",'focus-out': "STRING",'insert-newline': "STRING"};
  options = {hash:{
    'class': ("edit"),
    'value': ("title"),
    'focus-out': ("acceptChanges"),
    'insert-newline': ("acceptChanges")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['edit-todo'] || depth0['edit-todo']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "edit-todo", options))));
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes, options;
  hashContexts = {'class': depth0,'type': depth0,'checked': depth0};
  hashTypes = {'class': "STRING",'type': "STRING",'checked': "ID"};
  options = {hash:{
    'class': ("toggle"),
    'type': ("checkbox"),
    'checked': ("isCompleted")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<label ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editTodo", {hash:{
    'on': ("doubleClick")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</label><button ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeTodo", {hash:{
    'on': ("click")
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" class=\"destroy\"></button>");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '';
  return buffer;
  }

  data.buffer.push("<ul id=\"todo-list\">");
  hashContexts = {'itemController': depth0};
  hashTypes = {'itemController': "STRING"};
  stack1 = helpers.each.call(depth0, {hash:{
    'itemController': ("todo")
  },inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</ul>");
  return buffer;
  
});