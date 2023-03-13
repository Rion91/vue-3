```shell
   npm install 
   npm run start   
```

```js
/*named slot*/

<panel>
    Hi There
</panel>

<panel>
    <template v-slot:heading>
        Hello
    </template>

    This is a content!
</panel>

<panel>
    <template v-slot:heading>
        Hello
    </template>

    This is a content!
    <template v-slot:footer>
        This is a footer
    </template>
</panel>

<panel theme="light">
    <template v-slot:heading>
        Hello
    </template>

    This is a content!
    <template v-slot:footer>
        This is a footer
    </template>
</panel>
```
