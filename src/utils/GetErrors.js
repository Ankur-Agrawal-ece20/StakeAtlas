class GetErrors {
  errorsArr = [];
  makeErrorsArr = (errors) => {
    for (const [_key, value] of Object.entries(errors)) {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (item)
            this.errorsArr.push(`Row ${index + 1}: ${Object?.values(item)[0]}`);
        });
      } else if (typeof value === "object") {
        this.makeErrorsArr(value);
      } else {
        this.errorsArr.push(value);
      }
    }
  };
}

export default GetErrors;
