const app = new Vue
({
	el: '.container',
	data:
	{
		todos: [],
		// [{
		// 	name: 'some name',
		// 	description: 'lorem ipsum dolor sit amet',
		// 	priority: 0,
		// 	finished: false,
		// }],
		name: '',
		description:'',
		priority:'0',
		edited_index: null,
	},
	methods:
	{
		create_todo: function(event)
		{
			event.preventDefault();

			if (this.editIndex !== null)
			{ 
 				this.todos[this.editIndex].name=this.name; 
 				this.todos[this.editIndex].description=this.description; 
 				this.todos[this.editIndex].priority=this.priority; 
 			} 
 			else
 			{ 
 				this.todos.unshift(
 				{ 
 				name: this.name, 
 				description: this.description, 
 				priority: Number(this.priority), 
 				finished: false 
 				}); 
 			}

 			this.refresh();
		},
		read_todo: function()
		{

		},
		update_todo: function(index)
		{
			console.log(index);
			this.edited_index=index;
			this.name = this.todos[index].name;
			this.description = this.todos[index].description;
			this.priority = this.todos[index].priority;
		},
		delete_todo: function(index)
		{
			this.todos.splice(index, 1);
			this.refresh();
		}
		refresh: function()
		{

		}
	}
});


