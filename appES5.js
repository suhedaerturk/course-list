
function Course(title, instructor, image){
    this.title = title;
    this.instructor = instructor;
    this.image = image;
}

// UI CONSTRUCTOR

function UI (){

}

UI.prototype.addCourseToList = function(course){

    const list =document.getElementById("course-list");
    var html = `
    
     <tr>
     <td> < img src="img/${course.image}.jpg"></td>
     <td>${course.title}</td>
     <td> ${course.instructor}</td> 
     <td><a href="#" class="btn btn-danger btn-sm delete">delete<a> </td>
     </tr>
    `;
    list.innerHtml += html

};

UI.prototype.clearControls = function(){
    const title = document.getElementById("title").value="";
    const instructor = document.getElementById("instructor").value="";
    const image = document.getElementById("image").value="";
}

UI.prototype.deleteCourse = function(element){

    if(element.classList.contains("delete")){
        element.parentElement.parentElement.remove();
    }

}

UI.prototype.showAlert =function(message, className){

    var alert =`
        <div class="alert alert-${className}">
        
        ${mesage}
        </div>
    `;

    const row= document.querySelector(".row");
    row.insertAdjacentHTML('beforeBegin',alert);

    setTimeout(()=>{document.querySelector('.alert').remove();},3000);
}





document.getElementById("new-course").addEventListener("submit", function(e){

   
    const title = document.getElementById("title").value;
    const instructor = document.getElementById("instructor").value;
    const image = document.getElementById("image").value;


    //CREATE COURSE OBJECT

    const course = new Course(title, instructor,image);

    if(title=== ""|| image==="" || instructor===""){
        ui.showAlert("please complete the form","warning")

    }else{
        ui.addCourseToList(course);
        //clear controls
       ui.clearControls(); 
       ui.showAlert("the item has been added","success") 

    }

    //show on ui
    const ui = new UI();

    //add course to list
    e.preventDefault();
  
});

document.getElementById("course-list").addEventListener("click",function(e){

    const ui = new UI();
     ui.deleteCourse();
     ui.showAlert('the item has been deleted!',"danger")
});


//////////////////////

class Person {
    constructor(firstname,lastname, dob){
        this.firstname = firstname;
        this.lastname= lastname;  
        this.birthday = new Date(dob);   
    }
    greeting() {
        return `hello there ${this.firstname} ${this.lastname}`
    }

    calculateAge(){
        const diff = Date.now()-this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate);
    }

    getMarried(newLastName) {
        this.lastname = newLastName;
    }
}

const mary = new Person('mary', 'smith', '1-1-2000');

console.log(mary.getMarried("thomson"));