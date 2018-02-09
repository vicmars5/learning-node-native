#include <nan.h>

// NAN_METHOD is a Nan macro enabling convenient way of creating native node functions
// It takes a method's name as a param. By C++ convention, I used the Capital cased name
NAN_METHOD(Total) {
    v8::Local<v8::Array> arr = v8::Local<v8::Array>::Cast(info[0]);
    int x = 0;
    for (unsigned int i = 0; i < arr->Length(); i++) {
        x += Nan::Get(arr, i).ToLocalChecked()->IntegerValue();
    }
    v8::Local<v8::Integer> retVal = Nan::New(x);
    info.GetReturnValue().Set(retVal);
}

// Module initialization logic
NAN_MODULE_INIT(Initialize) {
    // Export the `Hello` function - Equivalent to `export function Hello(...)` in JS
    NAN_EXPORT(target, Total);
}

// Create the module called `addon` and initialize it with `Initialize` function (created
// with NAN_MODULE_INIT macro)
NODE_MODULE(addon, Initialize)
