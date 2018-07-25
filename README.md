# Speech Recognition API
Simple [API](https://en.wikipedia.org/wiki/Application_programming_interface
) for capturing voice for use on the browser.
> Note: 
   `webkitSpeechRecognition` must be available in **window** for this API to be functional
   Development of this library is still **highly in progress**

### Installation
- Clone this repo `git clone https://github.com/dare-mcadewole/speech-api-js.git`
- Extract `speechapi.min.js` from the `dist` folder into your project
- Include `speechapi.min.js` in your *html* markup:
    ```html
    <script src="path/to/speechapi.min.js"></script>
    ```
### Documentation

##### Basic Usage
#
```javascript
var speechAPI = new SpeechAPI();
// Start Speech system with the default options
speechAPI.start();
// Stop Speech system
speechAPI.stop();
```

##### Advanced Usage
#
```javascript
var options = {};
var speechAPI = new SpeechAPI(options);
speechAPI.start();
speechAPI.stop();
```

#### Options
The `options` optional argument can contain the following:

Parameter | Description | Default | Type
--- | --- | --- | ---
`continuous` | Suitable for dictation | ```true``` | ```boolean```
`interimResults` | If we want to start receiving results even if they are not final. | ```true``` | ```boolean```
`lang` | Language of choice | `en-US` | ```String```
`maxAlternatives` | The Highest Result | 1 | ```String```
`onstart` | Method called when the API starts | Logs `Listening...` to the console | ```function```
