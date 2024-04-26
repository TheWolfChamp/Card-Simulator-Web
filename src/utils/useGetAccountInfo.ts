interface AccountInformation {
  username: string;
}

function useGetAccountInformation() {
  const info: AccountInformation = {
    username: "quyenhuynh",
  };
  return info;
}

export default useGetAccountInformation;
