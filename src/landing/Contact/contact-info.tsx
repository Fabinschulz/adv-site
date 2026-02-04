import { CONTACT_INFO } from './constants';

export const ContactInfo = () => (
  <div className="flex gap-4 p-6 bg-white rounded-2xl border border-black/10 shadow-sm">
    {CONTACT_INFO.map(({ icon: Icon, title, content }) => (
      <div key={title} className="flex gap-4 p-5 bg-card rounded-2xl border">
        <div className="w-12 h-12 flex items-center justify-center bg-[#F6EEDB] rounded-xl">
          <Icon size={22} className="text-[#D4A528]" />
        </div>

        <div>
          <h4 className="font-semibold text-neutral-900">{title}</h4>
          <p className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">{content}</p>
        </div>
      </div>
    ))}
  </div>
);
