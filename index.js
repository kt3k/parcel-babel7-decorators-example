const foo = descriptor => {}

@foo
class A {
  method () {
    console.log('hello')
  }
}

const a = new A()
a.method()
