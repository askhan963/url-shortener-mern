import axios from 'axios';
import * as React from 'react';
import { serverUrl } from '../helper/Connstants';

interface IFormContainerProps {
  reloadState: ()=> void;
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = (props) => {
  const {reloadState} = props;
  const [fullUrl,setFullUrl] = React.useState<string>("");
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();
try {
  await axios.post(`${serverUrl}/createUrl`, {
    originalUrl : fullUrl
  }
)
setFullUrl("")
reloadState();
} catch (error) {
  console.log(error)
}
}
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="inputUrl" className="block text-gray-700 font-bold mb-2">
            Enter URL
          </label>
          <input
            type="text"
            id="inputUrl"
            value={fullUrl}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setFullUrl(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://example.com"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormContainer;
