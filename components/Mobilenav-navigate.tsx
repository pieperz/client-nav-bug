import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import React, { Fragment, useMemo } from "react";
import { navigate } from "vite-plugin-ssr/client/router";


import { navigationData, ShopifyMenuItem } from "../data/all-navigation";
// import { useCustomer } from "../../hooks/use-customer";
import { usePageContext } from "../renderer/usePageContext";
import { classNames } from "../utils/classNames";
import { resolveMenuItem } from "../utils/resolveMenuItem";
// import { Logo } from "../Logo";

const MenuItem = ({
  section,
  className,
}: {
  section: ShopifyMenuItem;
  className?: string;
}) => {
  // const { urlParsed } = usePageContext();
  // console.log(urlParsed);

  const url = useMemo(() => {
    return resolveMenuItem(section);
  }, [section]);

  return (
    <a
      href={url}
      
    >
      {section.title}
    </a>
  );
};

const MenuCollapsibleItem = ({ section }: { section: ShopifyMenuItem }) => {
  return (
    <Disclosure as="div" className="">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex justify-between w-full py-2 hover:bg-gray-100">
            <span className="pl-8">{section.title}</span>
            <ChevronRightIcon
              className={classNames(
                open ? " rotate-90" : "",
                "h-6 w-6 transform ease-in-out duration-150 mr-4"
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="space-y-1">
            {section.items.map((item) => (
              <MenuItem key={item.title} section={item} className="pl-12" />
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const MenuSection = ({ section }: { section: ShopifyMenuItem }) => {
  return section.items.length == 0 ? (
    <MenuItem key={section.id} section={section} className="pl-8" />
  ) : (
    <MenuCollapsibleItem key={section.id} section={section} />
  );
};

/**
 * Top level menu item
 * Should not be a direct link.
 */
const MenuSections = ({ menuItems }: { menuItems: ShopifyMenuItem[] }) => {
  return (
    <div className="flex flex-col flex-1">
      {menuItems.map((section, index) => (
        <div key={section.id}>
          <h3 className="py-3 pl-8 text-lg font-bold">{section.title}</h3>
          {section.items.map((item) => (
            <MenuSection key={item.id} section={item} />
          ))}
          {index != menuItems.length - 1 && (
            <hr className="my-2 border border-t border-200-grey" />
          )}
        </div>
      ))}
    </div>
  );
};

const MobileNavigationNavigate = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  // const { customer } = useCustomer();

  const menuItems = navigationData.items;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-40 flex" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-80" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="relative flex flex-col w-full max-w-[17.5rem] 2xs:max-w-[19rem] xs:max-w-[24rem]">
            <a
              // href={customer ? "/account" : "/account/login"}
              // href={"/about"}
              onClick={() => {
                navigate('/about')
              }}
              className="flex items-center min-h-[50px] w-full bg-red hover:bg-red-dark"
            >
              {/* <Logo
                className="ml-8 mr-1 w-[30px]"
                heartOnly={true}
                width={125}
                color="#fff"
              /> */}
              <span className="text-lg text-white ">
                Hello, Click me to do a full page navigation.
              </span>
            </a>

            <div className="pb-12 overflow-y-auto bg-white">
              <MenuSections menuItems={menuItems} />
            </div>

            <button
              /*
               * This Button must be last in the list so that it is not focused on open.
               * By Default HeadlessUI will focus on the first focusable element.
               */
              type="button"
              className="absolute left-[17.5rem] 2xs:left-[19rem] xs:left-[24rem]"
              onClick={() => setOpen(false)}
            >
              <XIcon className="w-12 h-12 text-white" aria-hidden="true" />
            </button>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileNavigationNavigate;
