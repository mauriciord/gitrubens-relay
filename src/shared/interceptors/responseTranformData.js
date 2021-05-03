const hasEnvelopedData = (response) => response.data && response.data.data;

const interceptorResponseTransformData = (response) => {
  try {
    const responseData = hasEnvelopedData(response)
      ? response.data.data
      : response.data;
    const getResponseData = {
      getResponseData: () => responseData,
    };
    return Object.assign(response, getResponseData);
  } catch (e) {
    throw `Error: ${e.message}`;
    return response;
  }
};

export default interceptorResponseTransformData;
