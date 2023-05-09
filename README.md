# lang-input
For your projects with more than one language, make your inputs such that you can enter data separately for each language.

# How to Use

- Install or Add Lang-Input to your project

install with NPM:
```
npm i lang-input
```
or add with src:
```
<script src="/your-path/lang-input/js/lang-input.js"></script>
```

- Create a div for input area

```
// Your other codes
...

<div class="lang-input"></div>

...
// Your other codes
```


- Select div with Jquery and init Lang-Input

```
$(".lang-input").langInput();
```


# Options
This library has a few proterties. These are :

- langs [required][Array]
- placeholder [optional][string]
- placeholderLangPrefix [optional][boolean]
- name [optional]][string]

## Usage ##

### Langs: ###
```
$(".lang-input").langInput({
    langs: ["tr","en",...]
})
```
For these features, the min. 2 languages ​​required.

### Placeholder: ###
```
$(".lang-input").langInput({
    langs: ["tr","en","ru","de"],
    placeholder: "Type Your Username"
})
```
> Also, for better results, you can use the localization translators you use. Example for Laravel:
```
$(".lang-input").langInput({
    langs: ["tr","en","ru","de"],
    placeholder: "{{__('form.input.type_username')}}"
})
```
so you can get more localized results.

### PlaceholderLangPrefix ###
If you tick this option as true, the input that will be created will be replaced with an input-group and you can display the language being added in the input as well. It also looks very stylish.

```
$(".lang-input").langInput({
    langs: ["tr","en","ru","de"],
    placeholder: "{{__('form.input.type_username')}}",
    placeholder: true
})
```

### Name ###

You can define a specific name for your inputs.
```
$(".lang-input").langInput({
    langs: ["tr","en","ru","de"],
    placeholder: "{{__('form.input.type_username')}}",
    placeholder: true,
    name : "username
})
```
Now you have specifically determined the name and id values ​​of the input you selected.

If you don't want to define a name value here, you can assign an id to the parent div. So you don't need to define it here.
```
// Your other codes
...

<div class="lang-input" id="username"></div>

...
// Your other codes
```


# Selecting The Created Input

It's very simple, whether you use jquery or javascript to select the inputs, each one has an id value.

> To access the input, add -{lang} to the end of the name you entered.

```
var usernameTr = $("#username-tr").val();
var usernameEn = $("#username-en").val();
var usernameRu = $("#username-ru").val();
var usernameDe = $("#username-de").val();
```

In this way, you can access any input you want.

Also, if you place divs inside a form element, serialize methods with the same values ​​will work.
