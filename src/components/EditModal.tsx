import React, { useState } from 'react';
import { X, Save, RotateCcw, Check, Upload, Trash2, Copy } from 'lucide-react';
import { PortfolioData } from '../types/portfolio';

interface EditModalProps {
  isOpen: boolean;
  data: PortfolioData;
  onSave: (newData: PortfolioData) => void;
  onReset: () => void;
  onClose: () => void;
}

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  data,
  onSave,
  onReset,
  onClose,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<PortfolioData>(data);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [copiedConfig, setCopiedConfig] = useState(false);

  const handleTextChange = (field: keyof PortfolioData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setFormData((prev) => ({
            ...prev,
            customAvatarUrl: event.target?.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAvatar = () => {
    setFormData((prev) => ({
      ...prev,
      customAvatarUrl: undefined,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl relative my-auto">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/70 rounded-t-2xl shrink-0">
          <div>
            <h3 className="text-base font-bold text-white">Customize Portfolio Details</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Easily edit your links, resume PDF, contact info, and bio. Changes save to your browser.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 overflow-y-auto space-y-5">
          
          {/* Status Message */}
          {savedSuccess && (
            <div className="p-3 bg-emerald-950/50 border border-emerald-800 text-emerald-300 text-xs rounded-xl flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Details saved successfully! Portfolio updated.</span>
            </div>
          )}

          {/* Profile Name & Headline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleTextChange('name', e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Professional Headline
              </label>
              <input
                type="text"
                value={formData.headline}
                onChange={(e) => handleTextChange('headline', e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          {/* Links: LinkedIn, Resume PDF & GitHub */}
          <div className="space-y-3 p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
            <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Profile Links & PDF Resume
            </h4>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                LinkedIn Profile URL
              </label>
              <input
                type="url"
                value={formData.linkedInUrl}
                onChange={(e) => handleTextChange('linkedInUrl', e.target.value)}
                placeholder="https://www.linkedin.com/in/alisha-malik-..."
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-sky-500 font-mono"
              />
              <p className="text-[11px] text-slate-500 mt-0.5">
                Current URL is configured and linked directly to your LinkedIn account.
              </p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                External Resume PDF Link (Google Drive / Cloud URL)
              </label>
              <input
                type="url"
                value={formData.resumePdfUrl}
                onChange={(e) => handleTextChange('resumePdfUrl', e.target.value)}
                placeholder="https://drive.google.com/your-resume.pdf"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-sky-500 font-mono"
              />
              <p className="text-[11px] text-slate-500 mt-0.5">
                Leave empty to use the built-in printable interactive resume viewer.
              </p>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                GitHub Profile URL
              </label>
              <input
                type="url"
                value={formData.gitHubUrl}
                onChange={(e) => handleTextChange('gitHubUrl', e.target.value)}
                placeholder="https://github.com/alishamalik"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-sky-500 font-mono"
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleTextChange('email', e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-sky-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Phone
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleTextChange('phone', e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-sky-500 font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleTextChange('location', e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          {/* Short Bio */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              Short Bio (Hero section)
            </label>
            <textarea
              rows={3}
              value={formData.shortBio}
              onChange={(e) => handleTextChange('shortBio', e.target.value)}
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-sky-500 resize-none leading-relaxed"
            />
          </div>

          {/* Optional Profile Photo Upload (User can upload real photo from local device if desired) */}
          <div className="p-4 bg-slate-950/60 border border-slate-800 rounded-xl">
            <h4 className="text-xs font-bold text-slate-200 mb-2">
              Profile Photo Option
            </h4>
            <p className="text-[11px] text-slate-400 mb-3">
              By default, an elegant &quot;AM&quot; initials monogram is used (no AI pictures). You can upload your own real photograph here from your computer if you wish.
            </p>
            <div className="flex items-center gap-3">
              <label className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white rounded-lg cursor-pointer border border-slate-700 flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5 text-sky-400" />
                <span>Upload From Device</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
              </label>
              {formData.customAvatarUrl && (
                <button
                  type="button"
                  onClick={handleRemoveAvatar}
                  className="px-3 py-1.5 bg-red-950/50 hover:bg-red-900/60 text-xs font-medium text-red-300 rounded-lg border border-red-800/60 flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Remove (Use Monogram)</span>
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onReset}
                className="px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-slate-800/40 hover:bg-slate-800 rounded-lg border border-slate-800 flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Defaults</span>
              </button>
              <button
                type="button"
                onClick={handleCopyJSON}
                className="px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-slate-800/40 hover:bg-slate-800 rounded-lg border border-slate-800 flex items-center gap-1.5"
              >
                {copiedConfig ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedConfig ? 'Copied!' : 'Export JSON'}</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm shadow-sky-600/30"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};
