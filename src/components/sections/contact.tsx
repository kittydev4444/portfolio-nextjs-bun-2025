import { socialLinks } from "@/config/site";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";
import * as motion from "motion/react-client";
import { ContactForm } from "../contact-form";
import { HeadingSection } from "../heading-section";
import RandomStars from "../random-star";

export default function Contact() {
  return (
    <section id="contact" className="relative -mt-2 py-20">
      <RandomStars count={10} />

      <div className="container relative z-10 mx-auto px-4">
        <HeadingSection
          title="Meow At Me!"
          subtitle="Have a question or want to work together? Let's chat!"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="font-nunito text-lg text-kitty-dark/80 dark:text-kitty-light/80">
                I&lsquo;m always open to new opportunities and collaborations.
                Feel free to reach out if you have any questions or just want to
                say hi! Purr~
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Card className="gradient-border overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <CardBody className="flex items-center gap-4 p-4">
                    <div className="rounded-full bg-gradient-to-br from-kitty-pink-hot to-kitty-blue p-3 text-white">
                      <Icon icon="lucide:mail" className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bubblegum font-medium">Email</h4>
                      <p className="text-kitty-dark/70 dark:text-kitty-light/70">
                        meow@kittydev.com
                      </p>
                    </div>
                  </CardBody>
                </Card>

                <Card className="gradient-border overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                  <CardBody className="flex items-center gap-4 p-4">
                    <div className="rounded-full bg-gradient-to-br from-kitty-green-pale to-kitty-green p-3 text-white">
                      <Icon icon="lucide:map-pin" className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bubblegum font-medium">Location</h4>
                      <p className="text-kitty-dark/70 dark:text-kitty-light/70">
                        Cyberpunk Kitty City
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </div>

              <Card className="gradient-border overflow-hidden border-none shadow-md transition-all duration-300 hover:shadow-lg">
                <CardBody className="p-4">
                  <h4 className="mb-3 font-bubblegum font-medium">
                    Paw-some Skills
                  </h4>
                  <p className="mb-4 text-kitty-dark/70 dark:text-kitty-light/70">
                    I specialize in creating purr-fect web experiences with
                    these technologies:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Chip className="bg-gradient-to-r from-kitty-blue-light/20 to-kitty-pink/20">
                      React
                    </Chip>
                    <Chip className="bg-gradient-to-r from-kitty-green-pale/20 to-kitty-green/20">
                      TypeScript
                    </Chip>
                    <Chip className="bg-gradient-to-r from-kitty-orange-pale/20 to-kitty-orange/20">
                      Next.js
                    </Chip>
                    <Chip className="bg-gradient-to-r from-kitty-pink/20 to-kitty-pink-hot/20">
                      Tailwind CSS
                    </Chip>
                  </div>
                </CardBody>
              </Card>

              <div>
                <h4 className="mb-3 font-bubblegum font-medium">
                  Connect with me
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-border overflow-hidden rounded-full bg-gradient-to-br from-kitty-blue-light/20 to-kitty-pink/20 p-3 text-kitty-dark transition-transform hover:scale-110 dark:text-kitty-light"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Icon icon={link.icon} className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
