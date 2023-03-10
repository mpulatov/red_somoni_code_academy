import React from 'react';

function Wrapper({children}) {
	return (
		<div className="mx-auto relative border-solid border-2">{children}</div>
	);
}

export default Wrapper;