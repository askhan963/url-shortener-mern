import * as React from 'react';
import FormContainer from './FormContainer';
import DataTable from './DataTable';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchUrls, createUrl } from '../app/UrlSlice';
interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = () => {
  // Access Redux dispatch and state
  const dispatch = useAppDispatch();
  const { data, loading } = useAppSelector((state) => state.urls);

  // Fetch data when component mounts
  React.useEffect(() => {
    dispatch(fetchUrls());
  }, [dispatch]);

  // Function to handle the form submission for creating a new URL
  const handleCreateUrl = async (originalUrl: string) => {
    await dispatch(createUrl(originalUrl));
    dispatch(fetchUrls()); // Fetch updated data immediately after adding a new URL
  };

  return (
    <>
      <FormContainer createUrl={handleCreateUrl} /> {/* Use the new createUrl prop */}
      {loading && <p>Loading...</p>}
      {data.length > 0 && <DataTable reloadState={() => dispatch(fetchUrls())} data={data} />}
    </>
  );
};

export default Container;