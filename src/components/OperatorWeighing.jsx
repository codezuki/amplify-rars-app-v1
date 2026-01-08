import React, { useState } from 'react';
import { Add, Trash, CloseCircle, TickCircle, InfoCircle, ArrowDown, ArrowUp,Truck,SearchNormal1,Sms, ArrowDown2} from 'iconsax-react';

const OperatorWeighing = () => {
  const [orderProduct, setOrderProduct] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [grossWeight, setGrossWeight] = useState('');
  const [netWeight, setNetWeight] = useState('');
  const [redLightMode, setRedLightMode] = useState('force')
  const [greenLightMode, setGreenLightMode] = useState('automatic')
  const [vehicle, setVehicle] = useState('')
const [carrier, setCarrier] = useState('')
const [weighingType, setWeighingType] = useState('')
const [order, setOrder] = useState('')
const [customer, setCustomer] = useState('')
const [product, setProduct] = useState('')
const [storageLocation, setStorageLocation] = useState('')
const [transactionType, setTransactionType] = useState('')
const [recipientInput, setRecipientInput] = useState('')
const [recipients, setRecipients] = useState([])
const [locationProducts, setLocationProducts] = useState(false)
const [productError, setProductError] = useState(false)
const [vehicleError, setVehicleError] = useState(false)
const [carrierError, setCarrierError] = useState(false)
const [typeError, setTypeError] = useState(false)
const [showRecipients, setShowRecipients] = useState(false)

  const incompleteTransactions = [
    { id: 1, type: 'P.M.', net: '5,949', date: '10/11/2024', time: '5:42:38 PM', company: 'DEMO Utilities Board', code: 'TTT0...' },
    { id: 2, type: 'ASD', net: '1', date: '09/11/2024', time: '5:53:42 PM', company: 'DEMO Utilities Board', code: 'TTT080...' },
    { id: 3, type: 'TRUCK', net: '6', date: '11/12/2024', time: '6:46:15 PM', company: 'mnk chemicals', code: 'TTT0808004...' },
    { id: 4, type: 'TRUCK', net: '4', date: '10/11/2024', time: '5:33:36 PM', company: '', code: '' },
  ];

  const handleAddRecipient = () => {
  if (!recipientInput.trim()) return;
  setRecipients([...recipients, recipientInput.trim()]);
  setRecipientInput('');
};

const handleRemoveRecipient = (index) => {
  setRecipients(prev => prev.filter((_, i) => i !== index));
};

  const handleDone = () => {
    console.log('Completing weighing...');
    // Add actual complete logic here
  };

  const handleCancel = () => {
    setVehicle('');
    setWeighingType('');
    setCarrier('');
    setTransactionType('');
    setOrderProduct('');
    setCustomer('');
    setStorageLocation('');
    setRecipients([]);
    setAdditionalInfo('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && recipientInput.trim()) {
      handleAddRecipient();
    }
  };

  const handleSave = () => {
  const vErr = !vehicle
  const cErr = !carrier
  const tErr = !weighingType
  const pErr = !product

  setVehicleError(vErr)
  setCarrierError(cErr)
  setTypeError(tErr)
  setProductError(pErr)

  if (vErr || cErr || tErr || pErr) return

}

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">DEMO SCALES</h1>
        <p className="text-gray-600 mt-1">Operator weighing</p>
      </div>

      <div className="space-y-6">
        {/* ================= TOP CARD ================= */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Left Column - Weighing location */}
<div className="space-y-4">

  <label className="text-bold text-gray-600">
    Weighing location
  </label>

  <div className="relative">
    <select className="w-full border px-3 py-2 text-sm">
      <option>WOODLEIGH WATERWORKS</option>
    </select>
    <ArrowDown
      size={16}
      className="absolute right-3 top-2.5 text-gray-500 pointer-events-none"
    />
  </div>

  <label className="text-bold text-gray-600">
    Scale
  </label>

  <div className="relative">
    <select className="w-full border px-3 py-2 text-sm">
      <option>Single weighing Double bridge</option>
    </select>
    <ArrowDown
      size={16}
      className="absolute right-3 top-2.5 text-gray-500 pointer-events-none"
    />
  </div>

  {/* Weight boxes */}
  <div className="flex items-center gap-3 mt-2">

    {/* Left weights */}
    <div className="space-y-2">

      <div className="flex items-center gap-2">
  <Truck size="40" color="oklch(0.34 0.01 258.43)" variant="Bold" />
  <input
    type="text"
    value={grossWeight}
    onChange={(e) => setGrossWeight(e.target.value)}
    className="w-full border bg-gray-200  px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    placeholder="Enter gross weight"
  />
</div>

<div className="flex items-center gap-2">
  <Truck size="40" color="oklch(0.34 0.01 258.43)" variant="Bold" />
  <input
    type="text"
    value={netWeight}
    onChange={(e) => setNetWeight(e.target.value)}
    className="w-full border bg-gray-200  px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    placeholder="Enter net weight"
  />
</div>


    </div>

    {/* Zero button */}
    <button
      type="button"
      className="bg-[#0a6fb6] text-white px-6 py-8 text-lg font-semibold"
      onClick={() => console.log('Zero scale')}
    >
      →0←
    </button>
  </div>
</div>


            {/* Middle Column - Traffic light control */}
<div className="space-y-6">

  <p className="text-sm font-medium text-gray-700">
    Traffic light control
  </p>

  {/* Red light */}
<div className="space-y-2">
  <span className="text-sm font-medium text-gray-700">Red light</span>

  <div
    className={`rounded-full w-16 h-8 relative cursor-pointer transition-colors ${
      redLightMode === 'force' ? 'bg-red-500' : 'bg-gray-300'
    }`}
    onClick={() =>
      setRedLightMode(
        redLightMode === 'force' ? 'automatic' : 'force'
      )
    }
  >
    <div
      className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${
        redLightMode === 'force' ? 'left-1' : 'left-9'
      }`}
    />
  </div>

  <div className="text-xs text-gray-600">
    {redLightMode === 'force' ? 'Force' : 'Automatic'}
  </div>
</div>


  {/* Green light */}
<div className="space-y-2">
  <span className="text-sm font-medium text-gray-700">Green light</span>

  <div
    className={`rounded-full w-16 h-8 relative cursor-pointer transition-colors ${
      greenLightMode === 'force' ? 'bg-green-500' : 'bg-gray-300'
    }`}
    onClick={() =>
      setGreenLightMode(
        greenLightMode === 'force' ? 'automatic' : 'force'
      )
    }
  >
    <div
      className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all ${
        greenLightMode === 'force' ? 'left-1' : 'left-9'
      }`}
    />
  </div>

  <div className="text-xs text-gray-600">
    {greenLightMode === 'force' ? 'Force (10s)' : 'Automatic'}
  </div>
</div>

</div>


            {/* Right Column - Incomplete transactions */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <InfoCircle size="20" variant="Bold" className="text-blue-600" />
                Incomplete transactions
              </h2>
              
              <div className="border border-gray-200 rounded-md overflow-hidden">
                <div className="max-h-60 overflow-y-auto">
                  {incompleteTransactions.map((tx) => (
                    <div key={tx.id} className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">{tx.net}</span>
                            <span className="text-gray-700">{tx.type}</span>
                            {tx.company && (
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                                {tx.company}
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            {tx.date}, {tx.time}
                          </div>
                          {tx.code && (
                            <div className="text-xs text-gray-400 mt-1">
                              Code: {tx.code}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FORM SECTION ================= */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  {/* Vehicle */}
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      Vehicle <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <input
        type="text"
        value={vehicle}
        onChange={(e) => setVehicle(e.target.value)}
        placeholder="No selection"
        className={`w-full h-11 border rounded px-3 pr-10 text-sm focus:outline-none ${
          vehicleError
            ? 'border-red-500'
            : 'border-gray-300 focus:border-blue-600'
        }`}
      />

      {/* Search icon */}
      <SearchNormal1
        size="18"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
      />
    </div>

    {vehicleError && (
      <p className="text-xs text-red-500 mt-1">
        Vehicle is required
      </p>
    )}
  </div>

  {/* Type */}
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      Type <span className="text-red-500">*</span>
    </label>

    <select
      value={weighingType}
      onChange={(e) => setWeighingType(e.target.value)}
      className={`w-full h-11 border rounded px-3 text-sm focus:outline-none ${
        typeError
          ? 'border-red-500'
          : 'border-gray-300 focus:border-blue-600'
      }`}
    >
      <option value=""> </option>
      <option value="previous">PREVIOUS</option>
      <option value="weighing">WEIGHING</option>
    </select>

    {typeError && (
      <p className="text-xs text-red-500 mt-1">
        Type is required
      </p>
    )}
  </div>

  {/* Carrier */}
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      Carrier <span className="text-red-500">*</span>
      <span className="ml-1 text-blue-600 font-normal cursor-pointer">
        (Create a new company)
      </span>
    </label>

    <div className="relative">
      <input
        type="text"
        value={carrier}
        onChange={(e) => setCarrier(e.target.value)}
        placeholder="No selection"
        className={`w-full h-11 border rounded px-3 pr-10 text-sm focus:outline-none ${
          carrierError
            ? 'border-red-500'
            : 'border-gray-300 focus:border-blue-600'
        }`}
      />

      {/* Search icon */}
      <SearchNormal1
        size="18"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
      />
    </div>

    {carrierError && (
      <p className="text-xs text-red-500 mt-1">
        Carrier is required
      </p>
    )}
  </div>

</div>
            {/* Transaction Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Transaction type
              </label>
              <div className="relative">
                <select
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white appearance-none"
                >
                  <option value="">Select transaction type</option>
                  <option value="sale">Sale</option>
                  <option value="purchase">Purchase</option>
                  <option value="transfer">Transfer</option>
                </select>
                <ArrowDown size="16" className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
              </div>
            </div>
            </div>


            {/* ================= ORDER / CUSTOMER ================= */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  {/* Order */}
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      Order
      <span className="ml-1 text-blue-600 font-normal cursor-pointer">
        (Create a new order)
      </span>
    </label>

    <div className="relative">
      <input
        type="text"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
        placeholder="No selection"
        className="w-full h-11 border border-gray-300 rounded px-3 pr-10 text-sm focus:outline-none focus:border-blue-600"
      />
      <SearchNormal1
        size="18"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
      />
    </div>
  </div>

  {/* Customer */}
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      Customer <span className="text-red-500">*</span>
      <span className="ml-1 text-blue-600 font-normal cursor-pointer">
        (Create a new company)
      </span>
    </label>

    <div className="relative">
      <input
        type="text"
        value={customer}
        onChange={(e) => setCustomer(e.target.value)}
        placeholder="No selection"
        className="w-full h-11 border border-gray-300 rounded px-3 pr-10 text-sm focus:outline-none focus:border-blue-600"
      />
      <SearchNormal1
        size="18"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
      />
    </div>
  </div>

  {/* Transaction type */}
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      Transaction type
    </label>

    <select
      value={transactionType}
      onChange={(e) => setTransactionType(e.target.value)}
      className="w-full h-11 border border-gray-300 rounded px-3 text-sm focus:outline-none focus:border-blue-600 appearance-none"
    >
      <option value=""></option>
      <option value="incoming">Incoming cargo</option>
      <option value="outgoing">Outgoing cargo</option>
    </select>
  </div>

  {/* Product */}
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      Product <span className="text-red-500">*</span>
    </label>

    <div className="relative">
      <input
        type="text"
        value={product}
        onChange={(e) => {
          setProduct(e.target.value)
          setProductError(false)
        }}
        placeholder="No selection"
        className={`w-full h-11 border rounded px-3 pr-10 text-sm focus:outline-none ${
          productError
            ? 'border-red-500'
            : 'border-gray-300 focus:border-blue-600'
        }`}
      />
      <SearchNormal1
        size="18"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
      />
    </div>

    <label className="flex items-center gap-2 mt-2 text-sm text-gray-600">
      <input
        type="checkbox"
        checked={locationProducts}
        onChange={(e) => setLocationProducts(e.target.checked)}
        className="h-4 w-4"
      />
      Location's products
    </label>

    {productError && (
      <p className="text-xs text-red-500 mt-1">
        Product is required
      </p>
    )}
  </div>

  {/* Storage location */}
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      Storage location
    </label>

    <select
      value={storageLocation}
      onChange={(e) => setStorageLocation(e.target.value)}
      className="w-full h-11 border border-gray-300 rounded px-3 text-sm focus:outline-none focus:border-blue-600 appearance-none"
    >
      <option value="">No storage location</option>
      <option value="warehouse1">Warehouse 1</option>
      <option value="warehouse2">Warehouse 2</option>
    </select>
  </div>

</div>

{/* ================= ADDITIONAL INFO ================= */}
<div className="mt-6">
  <label className="block text-sm font-medium text-gray-600 mb-1">
    Additional information
  </label>

  <textarea
    rows="3"
    className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-600 resize-none"
  />
</div>
</div>

              {/* ================= RECIPIENTS ================= */}
<div className="border border-gray-200 rounded-md overflow-hidden">

  {/* Header */}
  <div
    className="flex items-center justify-between px-4 py-3 bg-gray-50 cursor-pointer"
    onClick={() => setShowRecipients(!showRecipients)}
  >
    <div className="flex items-center gap-3">
      <div className="bg-[#0a6fb6] p-2 rounded">
        <Sms size="18" color="#fff" variant="Bold" />
      </div>
      <span className="font-medium text-gray-700">Recipients</span>
    </div>

    <ArrowDown2
      size="20" color='black'
      className={`transition-transform ${
        showRecipients ? 'rotate-180' : ''
      }`}
    />
  </div>

  {/* Body */}
  {showRecipients && (
    <div className="p-4 space-y-4 bg-white">

      {/* Status */}
      <div className="text-sm text-gray-500">
        {recipients.length === 0 ? 'No recipients' : ''}
      </div>

      {/* Label */}
      <div className="text-sm text-gray-600 font-medium">
        Add recipients' emails and phone numbers (separated by semicolon)
      </div>

      {/* Input + Add */}
      <div className="flex gap-2">
        <input
          type="text"
          value={recipientInput}
          onChange={(e) => setRecipientInput(e.target.value)}
          placeholder="e.g. +44191234567; example@example.com"
          className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />

        <button
          type="button"
          disabled={!recipientInput.trim()}
          onClick={handleAddRecipient}
          className={`px-5 py-2 text-sm font-medium ${
            recipientInput.trim()
              ? 'bg-[#0a6fb6] text-white'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          ADD
        </button>
      </div>

      {/* Recipients list */}
      {recipients.length > 0 && (
  <div className="space-y-2 mt-3">
    {recipients.map((recipient, index) => (
      <div
        key={index}
        className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded"
      >
        {/* Recipient text */}
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <TickCircle size="16" variant="Bold" color="#22c55e" />
          {recipient}
        </div>

        <button
          type="button"
          onClick={() => handleRemoveRecipient(index)}
          className="flex items-center justify-center w-8 h-8 rounded hover:bg-red-50"
        >
          <Trash size="18" variant="Bold" color="#ef4444" />
        </button>
      </div>
    ))}
  </div>
)}
    </div>
  )}
</div>


            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2.5 border bg-gray-600 text-white rounded-md hover:bg-gray-700 text-sm font-medium flex items-center gap-2 transition-colors"
              >
                CANCEL
              </button>
              <button
                type="button"
                onClick={handleSave}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium flex items-center gap-2 transition-colors"
              >
                SAVE
              </button>
              <button
                type="button"
                onClick={handleDone}
                className="px-6 py-2.5 bg-gray-800 text-white rounded-md hover:bg-gray-900 text-sm font-medium flex items-center  transition-colors"
              >
                DONE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatorWeighing;