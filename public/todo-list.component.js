
//Defines the component associated with <todo-list>
demoApp.component('todoList',{
  templateUrl:'/todo-template.html',  //Url of the template i.e the html file.

  //controller controls the DOM dynamically
  controller:['todoWebService',function todoController(todoWebService){
    let vm = {};

    todoWebService.get().then(function(response){
      let temp=response.data.list;
      vm.list = temp.split(",");
    })

    vm.newName = '';

    vm.addItem = function(){
      todoWebService.post(vm.newName).then(function(response){
        vm.list=response.data.list.split(",");
        vm.newName = '';
      })
    };

    vm.remItem = function(nameToRemove){
      todoWebService.delete(nameToRemove).then(function(response){
        vm.list = response.data.list.split(",");
      })
    };

    this.vm = vm;
  }],
  controllerAs:'userCtrl'
});
