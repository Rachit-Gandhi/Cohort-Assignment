<h1> Objects</h1>
<ul>
    <li>Creating and Working with Object Literals</li>
    <li>Nesting Arrays and Objects</li>
</ul>
<h2> Object Literals</h2>
    ->Collection of Key-Value Pairs (Properties)
    ->Labelling the indormation than indexing
    -> No order/ Doesn't matter
e.x.
const insta_Acc{
username -> unknowinglyanonymous27
userType -> normal_unpaying_user
}
Term Object in Javascript is loaded, Array is an object
<br>
````
const person = {firstName:"Mickey", lastName:"Mouse"};
console.log(person.firstName)
<br>
let insta_post = {
    likes: 169,
    comments: 34,
    alt_text: "photo of a building"
}
<br>
insta_post["likes"];
/* [""] gives the option of giving an expression or a variable */
<br>
insta_post.likes
````
Note all valid keys are converted to strings *symbols are an exception
<h2> Arrays + Objects </h2>
An Array of Objects, An Object with a property that is an array
