import * as React from 'react';
import { urlInterface } from '../interface/UrlData';
import { Link } from 'react-router-dom';
import { serverUrl } from '../helper/Connstants';
import axios from 'axios';

interface IDataTableProps {
  data: urlInterface[];
  reloadState: () => void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
  const { data: initialData, reloadState } = props;
  const [data, setData] = React.useState<urlInterface[]>(initialData);

  React.useEffect(() => {
    setData(initialData); // Sync state when props change
  }, [initialData]);

  const deleteUrl = async (id: string) => {
    try {
      await axios.delete(`${serverUrl}/getUrl/${id}`);
      setData(data.filter(item => item._id !== id)); // Update local state
      reloadState(); // Optionally update the parent state
    } catch (error) {
      console.log(error);
    }
  };

  const handleShortUrlClick =  () => {
   
      
      reloadState(); // Optionally update the parent state
  
  };

  const copyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(`${serverUrl}/getUrl/${url}`);
      alert(`URL Copied: ${serverUrl}/getUrl/${url}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Original URL</th>
            <th className="py-2 px-4 border-b">Short URL</th>
            <th className="py-2 px-4 border-b">Clicks</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item._id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b text-blue-500">
                <Link to={item.originalUrl} target="_blank" rel="noopener noreferrer">
                  {item.originalUrl}
                </Link>
              </td>
              <td className="py-2 px-4 border-b">
                <Link
                  to={`${serverUrl}/getUrl/${item.shortUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleShortUrlClick}
                >
                  {item.shortUrl}
                </Link>
              </td>
              <td className="py-2 px-4 border-b">{item.clicks}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex justify-center">
                  <div className="cursor-pointer px-2" onClick={() => copyUrl(item.shortUrl)}>
                    {/* Copy Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                    </svg>
                  </div>
                  <div className="cursor-pointer px-2" onClick={() => deleteUrl(item._id)}>
                    {/* Delete Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
