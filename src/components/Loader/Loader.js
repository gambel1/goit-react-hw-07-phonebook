import { Oval } from 'react-loader-spinner';
export default function Loader() {
  return (
    <Oval
      height={60}
      width={60}
      color="#9b94ce"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="##9b94ce"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
}
