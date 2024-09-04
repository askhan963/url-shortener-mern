import * as React from 'react';
import FormContainer from './FormContainer';
import { urlInterface } from '../interface/UrlData';
import axios from 'axios';
import { serverUrl } from '../helper/Connstants';
import DataTable from './DataTable';

interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const [data, setData] = React.useState<urlInterface[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${serverUrl}/allUrls`);
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const changeLoad = (): void => {
    setLoading(true);
  };

  React.useEffect(() => {
    fetchData();
  }, [loading]);

  return (
    <>
      <FormContainer reloadState={changeLoad} />
     {
      data.length > 0 &&
      (
        <DataTable reloadState={changeLoad} data={data} />
      )
     }
      
    </>
  );
};

export default Container;
