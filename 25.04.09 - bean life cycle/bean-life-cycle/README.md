# Bean Life Cycle
- Bean Life cycle have 5 stages
    - Loading Bean definations
    - Bean instantitaion
    - Bean initialization
    - Bean Usage
    - Bean destruction

## 1.Loading Bean Defination
- Bean definations are the configurations that defines how the Bean should be created.

## 2.Bean Instantiation
- Spring Container will create an instance of the "bean" based on the bean definations
- By default Spring container always invoke the non-parameterized or the default constructor of the Java Bean class
- In this phase "Beans" are initialized with its default values based on the properties of that JavaBean class.
- In this phase, the Spring Container also injects the required dependencies into the bean object.

## 3.Bean Initialization
- In this phase bean objects are initialized with custom values

## 4.Bean Usage
- Once the bean is fully instantiated & initialized, bean object is ready to be used in our application

## 5.Bean destruction
- In this phase bean objects will be destroyed or removed
