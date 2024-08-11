// import React from 'react';
// import { useBlocker } from 'react-router';

// function WithFormGuard(WrappedComponent: React.ComponentType) {
//   return function FormGuardWrapper({ value }: { value: string }) {
//     const blocker = useBlocker(() => {
//       if (value === '') return false;
//       return !confirm('Do you want to leave this page?');
//     });

//     return (
//       <div>
//         <WrappedComponent {...props} />
//       </div>
//     );
//   };
// }

// export default WithFormGuard;
