

#useForm HOOK

Ejemplo de uso :

```
    const initialForm = {
        name:"",
        age:0,
        email:""
    } // todo esto es "formValues"
    const [ formValues, handleInputChange,reset ] = useForm(initialForm)
```