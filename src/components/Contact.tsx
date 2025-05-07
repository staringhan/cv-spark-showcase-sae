
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé",
        description: "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      value: "jn.bonvent@gmail.com",
      link: "mailto:jn.bonvent@gmail.com",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+33 786 75 84 76",
      link: "tel:+33786758476",
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "53 Rue Vestrepain, 31100 Toulouse",
      link: "https://maps.google.com/?q=53+Rue+Vestrepain+31100+Toulouse",
    },
  ];

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          N'hésitez pas à me contacter pour discuter de vos projets ou opportunités
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
            <Card>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Votre nom"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Adresse email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Le sujet de votre message"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Écrivez votre message ici..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-cv-blue hover:bg-blue-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                      Envoi en cours...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Envoyer le message
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Mes coordonnées</h3>
            <div className="grid gap-6">
              {contactDetails.map((detail, index) => (
                <Card key={index} className="overflow-hidden">
                  <a
                    href={detail.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 text-cv-blue p-3 rounded-full">
                        <detail.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">{detail.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400 mt-1">
                          {detail.value}
                        </p>
                      </div>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
