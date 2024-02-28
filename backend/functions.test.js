const functions = require('./functions');

TextDecoderStream('Admin should be in usernames', ()=> {
    usernames = [];
    expect(usernames).toContain('admin');
})