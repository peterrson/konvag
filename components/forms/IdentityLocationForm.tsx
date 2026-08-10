import { useState } from 'react';

interface IdentityLocationFormProps {
  formData: any;
  setFormData: (data: any) => void;
  errors?: any;
  setErrors?: (errors: any) => void;
}

export default function IdentityLocationForm({ formData, setFormData, errors = {}, setErrors }: IdentityLocationFormProps) {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors && setErrors && errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const statesInNigeria = [
    'Lagos', 'Abuja FCT', 'Oyo', 'Ogun', 'Osun', 'Ondo', 'Ekiti', 'Kwara', 
    'Kano', 'Kaduna', 'Katsina', 'Jigawa', 'Bauchi', 'Yobe', 'Borno', 
    'Adamawa', 'Taraba', 'Gombe', 'Plateau', 'Nasarawa', 'Benue', 
    'Enugu', 'Anambra', 'Imo', 'Abia', 'Ebonyi', 'Cross River', 
    'Akwa Ibom', 'Rivers', 'Bayelsa', 'Delta', 'Edo', 'Sokoto', 
    'Zamfara', 'Kebbi', 'Niger', 'Borno'
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 p-4 rounded-xl border border-white/10 mt-4">
      <h3 className="col-span-1 md:col-span-2 text-[#ff8c00] font-bold text-lg mb-2">
        🛡️ Identity & Location Details
      </h3>

      {/* NIN */}
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">NIN (National ID)</label>
        <input
          type="text"
          name="nin"
          value={formData.nin || ''}
          onChange={handleChange}
          maxLength={11}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all"
          placeholder="11-digit NIN"
        />
        {errors?.nin && <p className="mt-1 text-sm text-red-400">{errors.nin}</p>}
      </div>

      {/* BVN */}
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">BVN (Bank Verification)</label>
        <input
          type="text"
          name="bvn"
          value={formData.bvn || ''}
          onChange={handleChange}
          maxLength={11}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all"
          placeholder="11-digit BVN"
        />
        {errors?.bvn && <p className="mt-1 text-sm text-red-400">{errors.bvn}</p>}
      </div>

      {/* Phone Number (Already exists in provider form, but adding here for clients) */}
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone || ''}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all"
          placeholder="+234 800 000 0000"
        />
        {errors?.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
      </div>

      {/* State */}
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">State</label>
        <select
          name="state"
          value={formData.state || ''}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all"
        >
          <option value="" className="text-black">Select State</option>
          {statesInNigeria.map((s) => <option key={s} value={s} className="text-black">{s}</option>)}
        </select>
        {errors?.state && <p className="mt-1 text-sm text-red-400">{errors.state}</p>}
      </div>

      {/* LGA */}
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">LGA (Local Govt. Area)</label>
        <input
          type="text"
          name="lga"
          value={formData.lga || ''}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all"
          placeholder="e.g. Ikeja"
        />
        {errors?.lga && <p className="mt-1 text-sm text-red-400">{errors.lga}</p>}
      </div>

      {/* City */}
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">City</label>
        <input
          type="text"
          name="city"
          value={formData.city || ''}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all"
          placeholder="e.g. Ikeja"
        />
        {errors?.city && <p className="mt-1 text-sm text-red-400">{errors.city}</p>}
      </div>

      {/* Street Address */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-white/80 mb-1">Street Address</label>
        <input
          type="text"
          name="streetAddress"
          value={formData.streetAddress || ''}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all"
          placeholder="e.g. 25, Obafemi Awolowo Way"
        />
        {errors?.streetAddress && <p className="mt-1 text-sm text-red-400">{errors.streetAddress}</p>}
      </div>

      {/* House Number */}
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">House Number</label>
        <input
          type="text"
          name="houseNumber"
          value={formData.houseNumber || ''}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all"
          placeholder="e.g. 25"
        />
        {errors?.houseNumber && <p className="mt-1 text-sm text-red-400">{errors.houseNumber}</p>}
      </div>

      {/* Nearest Bus Stop */}
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">Nearest Bus Stop / Landmark</label>
        <input
          type="text"
          name="nearestBusStop"
          value={formData.nearestBusStop || ''}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all"
          placeholder="e.g. Obalende Bus Stop"
        />
        {errors?.nearestBusStop && <p className="mt-1 text-sm text-red-400">{errors.nearestBusStop}</p>}
      </div>

      {/* Postal Code */}
      <div>
        <label className="block text-sm font-medium text-white/80 mb-1">Postal Code</label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode || ''}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#ff8c00] focus:ring-1 focus:ring-[#ff8c00] transition-all"
          placeholder="e.g. 100001"
        />
        {errors?.postalCode && <p className="mt-1 text-sm text-red-400">{errors.postalCode}</p>}
      </div>
    </div>
  );
}