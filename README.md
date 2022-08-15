# useCallback React Hook Tutorial

## Referential Equality:

Ex:

```
7 === 7
true
```

```
"Valyn" === "Valyn"
true
```

```
{} === {}
false
```

```
[] === []
false
```

```
function ff() {return () => 'Valyn' } // returns undefined
v1 = ff() // returns () => 'Valyn'
v2 = ff() // returns () => 'Valyn'
v1 === v2 // returns false
```

Arrays and objects are not primitive values so they don't have referential equality.

useCallback returns a memoized function. It does not call the function but returns the function definition so you can call the function later. useCallback has a dependency array just like useEffect hook.

If you have a function in a dependency array of useEffect it's better for the function to use the useCallback function else the function will be called with every render leading to an endless rendering loop.

```
 // const buildArray = () => [num1, num2];
  const buildArray = useCallback(() => [num1, num2], [num1, num2]);

  useEffect(() => {
    console.log(`New array: ${buildArray()}`);
    setResult(buildArray());
  }, [buildArray]); //causes infinite loop if not using useCallback function in dependencies
```
