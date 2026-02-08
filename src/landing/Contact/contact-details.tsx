import { CONTACT_INFO } from './constants';

const ContactDetails = () => {
  return (
    <>
      {CONTACT_INFO.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <item.icon size={22} className="text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
            <p className="text-sm text-muted-foreground whitespace-pre-line">{item.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export { ContactDetails };

