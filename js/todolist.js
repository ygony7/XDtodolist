const toDoInput = $(".todo-input-box #todo-input");
const toDoButton = toDoInput.next();
const toDoUl = $(".todo-ul");

toDoButton.on("click", addTodo);

function addTodo() {
    const li = $("<li>").addClass("todo-item");
    const checkbox = $("<input>").attr("type","checkbox").addClass("checkbox");
    const textNode = $("<span>").html(toDoInput.val()).addClass("todo");
    const addTime = $("<span>").html(" ("+getTime()+")");
    const delBtn = $("<button>").addClass("delBtn");
    
    li.append(checkbox).append(textNode).append(addTime).append(delBtn);
    toDoUl.append(li);

    toDoInput.val("");
    delBtn.html("XD");

    checkbox.on("click", todoCheck);
    delBtn.on("click", todoDelete);
    number();
    textNode.on("dblclick", edit);
}

function todoCheck() {
    if($(this).is(":checked")) {
        $(this).nextAll().not("button").css("color", "lightgray");
        $(this).nextAll().not("button").css("textDecoration", "line-through");
        $(this).nextAll().not("button").css("textDecoration-color", "rgba(255,0,0,0.8)");
    } else {
        $(this).nextAll().not("button").css("color", "black");
        $(this).nextAll().not("button").css("textDecoration", "");
    }  
    number();
};

function todoDelete() {
    $(this).parent().remove();
    number();
};

function number() {
    const allnum = $("input:checkbox").length;
    const num = $("input:checkbox:checked").length;  
    $(".all-btn").html("All : "+allnum);
    $(".active-btn").html("Active : "+(allnum-num));
    $(".completed-btn").html("Completed : "+num);
}

function edit() {
    const text = $(this).text();
    const inputElem = $("<input>").attr("type", "text").addClass("edit-input").val(text);
    $(this).after(inputElem);
    inputElem.focus();

    inputElem.on("keypress", function() {
        if(window.event.keyCode == 13) {
            $(this).prev().html($(this).val());
            $(this).remove();
        }
    })

    $("body").on("click", function(e) {
        const body = $(e.target);
        const inputArea = body.hasClass("edit-input") 
        if (!inputArea) {
            inputElem.prev().html(inputElem.val());
            inputElem.remove();
        }
    })
}

$(".complete-all-btn").on("click", checked);
var i = 0;
function checked() {
    if (i%2 == 0) {
        $("input:checkbox").prop("checked", true);
    } else {
        $("input:checkbox").prop("checked", false);
    }
    todoCheckAll();
    i++;
};

function todoCheckAll() {
    if($("input:checkbox").is(":checked")) {
        $("span").css("color", "lightgray");
        $("span").css("textDecoration", "line-through");
        $("span").css("textDecoration-color", "rgba(255,0,0,0.8)");
    } else {
        $("span").css("color", "black");
        $("span").css("textDecoration", "");
    }  
    number();
};

$(".all-btn").css("border", "3px solid cadetblue");
$(".all-btn").css("border-radius", "8px");
$(".all-btn").click(function() {
    $(".button-group").children().css("border", "");
    $(this).css("border", "3px solid cadetblue");
    $(this).css("border-radius", "8px");
    $("input:checkbox").parent().show();
})

$(".active-btn").click(function() {
    $(".button-group").children().css("border", "");
    $(this).css("border", "3px solid cadetblue");
    $(this).css("border-radius", "8px");
    $("input:checkbox").parent().show();
    $("input:checkbox:checked").parent().hide();
})

$(".completed-btn").click(function() {
    $(".button-group").children().css("border", "");
    $(this).css("border", "3px solid cadetblue");
    $(this).css("border-radius", "8px");
    $("input:checkbox").parent().hide();
    $("input:checkbox:checked").parent().show();
})

$(".clear-completed-btn").click(function() {
    $("input:checkbox:checked").parent().remove();
    number();
})




