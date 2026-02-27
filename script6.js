var grade="A";
document.write("Entering switch block<br/>");
switch (grade){
    case'A':document.write("Good job<br/>");
    break;

    case'B': document.write("Pretty good<br/>");
    break;

    case'C': document.write("Passed<br/>");
    break;

    case'D': document.write("Not so good<br/>");
    break;

    case'F': document.write("Failed<br/>");
    break;

    default: document.write("Unknown Grade<br/>");
}
document.write("Exiting Switch Block");