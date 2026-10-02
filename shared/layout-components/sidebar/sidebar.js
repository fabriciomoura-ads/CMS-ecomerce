import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { connect } from "react-redux";
import SimpleBar from "simplebar-react";
import { basePath } from "../../../next.config";
import store from "../../../shared/redux/store";
import Menuloop from "../../data/menuloop";
import { ThemeChanger } from "../../redux/action";
import { getMenuItems } from "./nav";
import { useSession } from "next-auth/react";

const Sidebar = ({ local_varaiable, ThemeChanger }) => {
  const { data: session } = useSession();
  const userRole = session?.user?.role || "CUSTOMER";
  const [menuitems, setMenuitems] = useState(getMenuItems(userRole));

  const router = useRouter();

  // Atualizar menu quando o role mudar
  useEffect(() => {
    setMenuitems(getMenuItems(userRole));
  }, [userRole]);

  const isActiveMenuItem = (path) => {
    if (!path) return false;

    const lowerPath = router.pathname.toLowerCase();

    return lowerPath.includes(path.toLowerCase());
  };

  const isSpecialActive = (title) => {
    const lowerPath = router.pathname.toLowerCase();
    return (
      (lowerPath.includes("finance") &&
        title?.toLowerCase() === "financeiro") ||
      (lowerPath.includes("users") && title?.toLowerCase() === "usuários") ||
      (lowerPath.includes("dashboard") &&
        title?.toLowerCase() === "dashboard") ||
      (lowerPath.includes("categories") &&
        title?.toLowerCase() === "categorias") ||
      (lowerPath.includes("product") && title?.toLowerCase() === "produtos") ||
      (lowerPath.includes("coupon") && title?.toLowerCase() === "cupom")
    );
  };

  function closeMenuFn() {
    const closeMenuRecursively = (items) => {
      items?.forEach((item) => {
        // Verificar se o objeto pode ser modificado antes de tentar modificar
        try {
          if (Object.isExtensible(item)) {
            item.active = false;
          }
        } catch (error) {
          console.warn("Não foi possível modificar o objeto do menu:", error);
        }

        if (item.children && item.children.length > 0) {
          closeMenuRecursively(item.children);
        }
      });
    };
    closeMenuRecursively(menuitems);
    setMenuitems((prevMenu) => deepClone(prevMenu));
  }

  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    mainContent.addEventListener("click", menuClose);
    const Container = document.querySelector(".layout");
    Container.addEventListener("click", Containerclick);
  }, []);

  const location = useRouter();

  function Onhover() {
    const theme = store.getState();
    if (
      (theme.toggled == "icon-overlay-close" ||
        theme.toggled == "detached-close") &&
      theme.iconOverlay != "open"
    ) {
      ThemeChanger({ ...theme, iconOverlay: "open" });
    }
  }
  function Outhover() {
    const theme = store.getState();
    if (
      (theme.toggled == "icon-overlay-close" ||
        theme.toggled == "detached-close") &&
      theme.iconOverlay == "open"
    ) {
      ThemeChanger({ ...theme, iconOverlay: "" });
    }
  }

  function menuClose() {
    const theme = store.getState();
    if (window.innerWidth <= 992) {
      ThemeChanger({ ...theme, toggled: "close" });
    }
    const overlayElement = document.querySelector("#responsive-overlay");
    if (overlayElement) {
      overlayElement.classList.remove("active");
    }
    if (
      theme.dataNavLayout == "horizontal" ||
      theme.dataNavStyle == "menu-click" ||
      theme.dataNavStyle == "icon-click"
    ) {
      closeMenuFn();
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const WindowPreSize = [window.innerWidth];

      function menuResizeFn() {
        WindowPreSize.push(window.innerWidth);
        if (WindowPreSize.length > 2) {
          WindowPreSize.shift();
        }
        const theme = store.getState();
        if (WindowPreSize.length > 1) {
          if (
            WindowPreSize[WindowPreSize.length - 1] < 992 &&
            WindowPreSize[WindowPreSize.length - 2] >= 992
          ) {
            ThemeChanger({ ...theme, toggled: "close" });
          }

          if (
            WindowPreSize[WindowPreSize.length - 1] >= 992 &&
            WindowPreSize[WindowPreSize.length - 2] < 992
          ) {
            ThemeChanger({
              ...theme,
              toggled:
                theme.dataVerticalStyle == "doublemenu"
                  ? "double-menu-open"
                  : "",
            });
          }
        }
      }

      // Attach the event listener
      window.addEventListener("resize", menuResizeFn);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", menuResizeFn);
      };
    }
  }, []);

  function switcherArrowFn() {
    function slideClick() {
      const slide = document.querySelectorAll(".slide");
      const slideMenu = document.querySelectorAll(".slide-menu");

      slide.forEach((element) => {
        if (element.classList.contains("is-expanded")) {
          element.classList.remove("is-expanded");
        }
      });

      slideMenu.forEach((element) => {
        if (element.classList.contains("open")) {
          element.classList.remove("open");
          element.style.display = "none";
        }
      });
    }

    slideClick();
  }

  function slideRight() {
    const menuNav = document.querySelector(".main-menu");
    const mainContainer1 = document.querySelector(".main-sidebar");

    if (menuNav && mainContainer1) {
      const marginLeftValue = Math.ceil(
        Number(
          window.getComputedStyle(menuNav).marginInlineStart.split("px")[0]
        )
      );
      const marginRightValue = Math.ceil(
        Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
      );
      const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
      let mainContainer1Width = mainContainer1.offsetWidth;

      if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
        if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
          if (Math.abs(check) > Math.abs(marginLeftValue)) {
            menuNav.style.marginInlineEnd = "0";

            if (
              !(
                Math.abs(check) >
                Math.abs(marginLeftValue) + mainContainer1Width
              )
            ) {
              mainContainer1Width = Math.abs(check) - Math.abs(marginLeftValue);
              const slideRightButton = document.querySelector("#slide-right");
              if (slideRightButton) {
                slideRightButton.classList.add("hidden");
              }
            }

            menuNav.style.marginInlineStart =
              Number(menuNav.style.marginInlineStart.split("px")[0]) -
              Math.abs(mainContainer1Width) +
              "px";

            const slideRightButton = document.querySelector("#slide-right");
            if (slideRightButton) {
              slideRightButton.classList.remove("hidden");
            }
          }
        } else {
          if (Math.abs(check) > Math.abs(marginRightValue)) {
            menuNav.style.marginInlineEnd = "0";

            if (
              !(
                Math.abs(check) >
                Math.abs(marginRightValue) + mainContainer1Width
              )
            ) {
              mainContainer1Width =
                Math.abs(check) - Math.abs(marginRightValue);
              const slideRightButton = document.querySelector("#slide-right");
              if (slideRightButton) {
                slideRightButton.classList.add("hidden");
              }
            }

            menuNav.style.marginInlineStart =
              Number(menuNav.style.marginInlineStart.split("px")[0]) -
              Math.abs(mainContainer1Width) +
              "px";

            const slideLeftButton = document.querySelector("#slide-left");
            if (slideLeftButton) {
              slideLeftButton.classList.remove("hidden");
            }
          }
        }
      }

      const element = document.querySelector(".main-menu > .slide.open");
      const element1 = document.querySelector(".main-menu > .slide.open > ul");
      if (element) {
        element.classList.remove("active");
      }
      if (element1) {
        element1.style.display = "none";
      }
    }

    switcherArrowFn();
  }

  function slideLeft() {
    const menuNav = document.querySelector(".main-menu");
    const mainContainer1 = document.querySelector(".main-sidebar");

    if (menuNav && mainContainer1) {
      const marginLeftValue = Math.ceil(
        Number(
          window.getComputedStyle(menuNav).marginInlineStart.split("px")[0]
        )
      );
      const marginRightValue = Math.ceil(
        Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
      );
      const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
      let mainContainer1Width = mainContainer1.offsetWidth;

      if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
        if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
          if (Math.abs(check) <= Math.abs(marginLeftValue)) {
            menuNav.style.marginInlineStart = "0px";
          }
        } else {
          if (Math.abs(check) > Math.abs(marginRightValue)) {
            menuNav.style.marginInlineStart = "0";

            if (
              !(
                Math.abs(check) >
                Math.abs(marginRightValue) + mainContainer1Width
              )
            ) {
              mainContainer1Width =
                Math.abs(check) - Math.abs(marginRightValue);
              const slideRightButton = document.querySelector("#slide-right");
              if (slideRightButton) {
                slideRightButton.classList.add("hidden");
              }
            }

            menuNav.style.marginInlineStart =
              Number(menuNav.style.marginInlineStart.split("px")[0]) -
              Math.abs(mainContainer1Width) +
              "px";

            const slideLeftButton = document.querySelector("#slide-left");
            if (slideLeftButton) {
              slideLeftButton.classList.remove("hidden");
            }
          }
        }
      }

      const element = document.querySelector(".main-menu > .slide.open");
      const element1 = document.querySelector(".main-menu > .slide.open > ul");
      if (element) {
        element.classList.remove("active");
      }
      if (element1) {
        element1.style.display = "none";
      }
    }

    switcherArrowFn();
  }

  const Topup = () => {
    if (window.scrollY > 30 && document.querySelector(".app-sidebar")) {
      const Scolls = document.querySelectorAll(".app-sidebar");
      Scolls.forEach((e) => {
        e.classList.add("sticky-pin");
      });
    } else {
      const Scolls = document.querySelectorAll(".app-sidebar");
      Scolls.forEach((e) => {
        e.classList.remove("sticky-pin");
      });
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", Topup);
  }

  const level = 0;
  let hasParent = false;
  let hasParentLevel = 0;

  // Função para criar cópia profunda segura
  function deepClone(obj, hash = new WeakMap()) {
    if (obj === null || typeof obj !== "object") return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof Array) return obj.map((item) => deepClone(item, hash));
    if (hash.has(obj)) return hash.get(obj);

    const clonedObj = {};
    hash.set(obj, clonedObj);

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key], hash);
      }
    }
    return clonedObj;
  }

  function setSubmenu(event, targetObject, MENUITEMS = menuitems) {
    if (!event?.ctrlKey) {
      for (const item of MENUITEMS) {
        if (item === targetObject) {
          // Verificar se o objeto pode ser modificado antes de tentar modificar
          try {
            if (Object.isExtensible(item)) {
              item.active = true;
              item.selected = true;
            } else {
              // Se o objeto não for extensível, criar uma cópia modificável
              const modifiableItem = { ...item, active: true, selected: true };
              // Atualizar o estado do menu com a cópia modificável
              setMenuitems((prevMenu) => {
                const newMenu = deepClone(prevMenu);
                // Encontrar e substituir o objeto não extensível
                const updateMenuObject = (items) => {
                  for (let i = 0; i < items.length; i++) {
                    if (items[i] === item) {
                      items[i] = modifiableItem;
                      return true;
                    }
                    if (items[i].children && items[i].children.length > 0) {
                      if (updateMenuObject(items[i].children)) {
                        return true;
                      }
                    }
                  }
                  return false;
                };
                updateMenuObject(newMenu);
                return newMenu;
              });
              continue; // Continuar para o próximo item
            }
          } catch (error) {
            console.warn("Não foi possível modificar o objeto do menu:", error);
            continue; // Continuar para o próximo item
          }

          setMenuAncestorsActive(item);
        } else if (!item.active && !item.selected) {
          // Verificar se o objeto pode ser modificado antes de tentar modificar
          try {
            if (Object.isExtensible(item)) {
              item.active = false;
              item.selected = false;
            }
          } catch (error) {
            console.warn("Não foi possível modificar o objeto do menu:", error);
          }
        } else {
          removeActiveOtherMenus(item);
        }
        if (item.children && item.children.length > 0) {
          setSubmenu(event, targetObject, item.children);
        }
      }
    }

    // Atualizar o estado de forma segura
    setMenuitems((prevMenu) => {
      return deepClone(prevMenu);
    });
  }
  function getParentObject(obj, childObject, depth = 0) {
    // Limitar recursão a 10 níveis para evitar estouro da pilha
    if (depth > 10) {
      return null;
    }

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object" && obj[key] === childObject) {
          return obj;
        }
        if (typeof obj[key] === "object") {
          const parentObject = getParentObject(
            obj[key],
            childObject,
            depth + 1
          );
          if (parentObject !== null) {
            return parentObject;
          }
        }
      }
    }
    return null;
  }
  function setMenuAncestorsActive(targetObject) {
    const parent = getParentObject(menuitems, targetObject);
    const theme = store.getState();
    if (parent && hasParentLevel < 5) {
      // Limitar recursão a 5 níveis
      if (hasParentLevel > 2) {
        hasParent = true;
      }

      // Verificar se o objeto pode ser modificado antes de tentar modificar
      try {
        if (Object.isExtensible(parent)) {
          parent.active = true;
          parent.selected = true;
        } else {
          // Se o objeto não for extensível, criar uma cópia modificável
          const modifiableParent = { ...parent, active: true, selected: true };
          // Atualizar o estado do menu com a cópia modificável
          setMenuitems((prevMenu) => {
            const newMenu = deepClone(prevMenu);
            // Encontrar e substituir o objeto não extensível
            const updateMenuObject = (items) => {
              for (let i = 0; i < items.length; i++) {
                if (items[i] === parent) {
                  items[i] = modifiableParent;
                  return true;
                }
                if (items[i].children && items[i].children.length > 0) {
                  if (updateMenuObject(items[i].children)) {
                    return true;
                  }
                }
              }
              return false;
            };
            updateMenuObject(newMenu);
            return newMenu;
          });
          return; // Sair da função após atualizar o estado
        }
      } catch (error) {
        console.warn("Não foi possível modificar o objeto do menu:", error);
        return;
      }

      hasParentLevel += 1;
      setMenuAncestorsActive(parent);
    } else if (!hasParent) {
      if (theme.dataVerticalStyle == "doublemenu") {
        ThemeChanger({ ...theme, toggled: "double-menu-close" });
      }
    }
  }
  function removeActiveOtherMenus(item, depth = 0) {
    // Limitar recursão a 10 níveis para evitar estouro da pilha
    if (depth > 10) {
      return;
    }

    if (item) {
      if (Array.isArray(item)) {
        for (const val of item) {
          // Verificar se o objeto pode ser modificado antes de tentar modificar
          try {
            if (Object.isExtensible(val)) {
              val.active = false;
              val.selected = false;
            }
          } catch (error) {
            console.warn("Não foi possível modificar o objeto do menu:", error);
          }
        }
      }

      // Verificar se o objeto pode ser modificado antes de tentar modificar
      try {
        if (Object.isExtensible(item)) {
          item.active = false;
          item.selected = false;
        }
      } catch (error) {
        console.warn("Não foi possível modificar o objeto do menu:", error);
      }

      if (item.children && item.children.length > 0) {
        removeActiveOtherMenus(item.children, depth + 1);
      }
    }
  }
  function setMenuUsingUrl(currentPath) {
    hasParent = false;
    hasParentLevel = 1;

    const setSubmenuRecursively = (items, depth = 0) => {
      // Limitar recursão a 10 níveis para evitar estouro da pilha
      if (depth > 10) {
        return;
      }

      items?.forEach((item) => {
        if (item.path == "") {
        } else if (item.path === currentPath) {
          setSubmenu(null, item);
        }
        if (item.children && item.children.length > 0) {
          setSubmenuRecursively(item.children, depth + 1);
        }
      });
    };
    setSubmenuRecursively(menuitems);
  }
  const [previousUrl, setPreviousUrl] = useState("/");

  useEffect(() => {
    const targetElement = document.documentElement;

    const observer = new MutationObserver(handleAttributeChange);

    const config = { attributes: true };

    observer.observe(targetElement, config);
    let currentPath = location.pathname.endsWith("/")
      ? location.pathname.slice(0, -1)
      : location.pathname;

    if (currentPath !== previousUrl) {
      setMenuUsingUrl(currentPath);
      setPreviousUrl(currentPath);
    }
  }, [location]);

  function toggleSidemenu(event, targetObject, MENUITEMS = menuitems) {
    const theme = store.getState();
    let element = event.target;

    if (
      (theme.dataNavStyle != "icon-hover" &&
        theme.dataNavStyle != "menu-hover") ||
      window.innerWidth < 992 ||
      (theme.dataNavLayout != "horizontal" &&
        (theme.toggled != "icon-hover-closed" ||
          theme.toggled != "menu-hover-closed"))
    ) {
      for (const item of MENUITEMS) {
        if (item === targetObject) {
          if (theme.dataVerticalStyle == "doublemenu" && item.active) {
            return;
          }
          item.active = !item.active;

          if (item.active) {
            closeOtherMenus(MENUITEMS, item);
          } else {
            if (theme.dataVerticalStyle == "doublemenu") {
              ThemeChanger({
                ...theme,
                toggled: "double-menu-close",
              });
            }
          }
          setAncestorsActive(MENUITEMS, item, 0);
        } else if (!item.active) {
          if (theme.dataVerticalStyle != "doublemenu") {
            item.active = false;
          }
        }
        if (item.children && item.children.length > 0) {
          toggleSidemenu(event, targetObject, item.children);
        }
      }
      if (targetObject?.children && targetObject.active) {
        if (
          theme.dataVerticalStyle == "doublemenu" &&
          theme.toggled != "double-menu-open"
        ) {
          ThemeChanger({ ...theme, toggled: "double-menu-open" });
        }
      }
      if (
        element &&
        theme.dataNavLayout == "horizontal" &&
        (theme.dataNavStyle == "menu-click" ||
          theme.dataNavStyle == "icon-click")
      ) {
        const listItem = element.closest("li");
        if (listItem) {
          const siblingUL = listItem.querySelector("ul");
          let outterUlWidth = 0;
          let listItemUL = listItem.closest("ul:not(.main-menu)");
          while (listItemUL) {
            listItemUL = listItemUL.parentElement.closest("ul:not(.main-menu)");
            if (listItemUL) {
              outterUlWidth += listItemUL.clientWidth;
            }
          }
          if (siblingUL) {
            let siblingULRect = listItem.getBoundingClientRect();
            if (theme.dir == "rtl") {
              if (
                siblingULRect.left - siblingULRect.width - outterUlWidth + 150 <
                  0 &&
                outterUlWidth < window.innerWidth &&
                outterUlWidth + siblingULRect.width + siblingULRect.width <
                  window.innerWidth
              ) {
                targetObject.dirchange = true;
              } else {
                targetObject.dirchange = false;
              }
            } else {
              if (
                outterUlWidth + siblingULRect.right + siblingULRect.width + 50 >
                  window.innerWidth &&
                siblingULRect.right >= 0 &&
                outterUlWidth + siblingULRect.width + siblingULRect.width <
                  window.innerWidth
              ) {
                targetObject.dirchange = true;
              } else {
                targetObject.dirchange = false;
              }
            }
          }
          setTimeout(() => {
            let computedValue = siblingUL.getBoundingClientRect();
            if (computedValue.bottom > window.innerHeight) {
              siblingUL.style.height =
                window.innerHeight - computedValue.top - 8 + "px";
              siblingUL.style.overflow = "auto";
            }
          }, 100);
        }
      }
    }
    setMenuitems((prevMenu) => deepClone(prevMenu));
  }

  function setAncestorsActive(MENUITEMS, targetObject, depth = 0) {
    // Limitar recursão a 10 níveis para evitar estouro da pilha
    if (depth > 10) {
      return;
    }

    const theme = store.getState();
    const parent = findParent(MENUITEMS, targetObject);
    if (parent) {
      parent.active = true;
      if (parent.active) {
        ThemeChanger({ ...theme, toggled: "double-menu-open" });
      }

      setAncestorsActive(MENUITEMS, parent, depth + 1);
    } else {
      if (theme.dataVerticalStyle == "doublemenu") {
        ThemeChanger({ ...theme, toggled: "double-menu-close" });
      }
    }
  }

  function closeOtherMenus(MENUITEMS, targetObject) {
    for (const item of MENUITEMS) {
      if (item !== targetObject) {
        item.active = false;
        if (item.children && item.children.length > 0) {
          closeOtherMenus(item.children, targetObject);
        }
      }
    }
  }

  function findParent(MENUITEMS, targetObject, depth = 0) {
    // Limitar recursão a 10 níveis para evitar estouro da pilha
    if (depth > 10) {
      return null;
    }

    for (const item of MENUITEMS) {
      if (item.children && item.children.includes(targetObject)) {
        return item;
      }
      if (item.children && item.children.length > 0) {
        const parent = findParent(item.children, targetObject, depth + 1);
        if (parent) {
          return parent;
        }
      }
    }
    return null;
  }
  //
  function HoverToggleInnerMenuFn(event, item) {
    const theme = store.getState();
    let element = event.target;
    if (
      element &&
      theme.dataNavLayout == "horizontal" &&
      (theme.dataNavStyle == "menu-hover" || theme.dataNavStyle == "icon-hover")
    ) {
      const listItem = element.closest("li");
      if (listItem) {
        const siblingUL = listItem.querySelector("ul");
        let outterUlWidth = 0;
        let listItemUL = listItem.closest("ul:not(.main-menu)");
        while (listItemUL) {
          listItemUL = listItemUL.parentElement.closest("ul:not(.main-menu)");
          if (listItemUL) {
            outterUlWidth += listItemUL.clientWidth;
          }
        }
        if (siblingUL) {
          let siblingULRect = listItem.getBoundingClientRect();
          if (theme.dir == "rtl") {
            if (
              siblingULRect.left - siblingULRect.width - outterUlWidth + 150 <
                0 &&
              outterUlWidth < window.innerWidth &&
              outterUlWidth + siblingULRect.width + siblingULRect.width <
                window.innerWidth
            ) {
              item.dirchange = true;
            } else {
              item.dirchange = false;
            }
          } else {
            if (
              outterUlWidth + siblingULRect.right + siblingULRect.width + 50 >
                window.innerWidth &&
              siblingULRect.right >= 0 &&
              outterUlWidth + siblingULRect.width + siblingULRect.width <
                window.innerWidth
            ) {
              item.dirchange = true;
            } else {
              item.dirchange = false;
            }
          }
        }
      }
    }
    setMenuitems((prevMenu) => deepClone(prevMenu));
  }

  const Sideclick = () => {
    if (window.innerWidth > 992) {
      let html = document.documentElement;
      if (html.getAttribute("data-icon-overlay") != "open") {
        html.setAttribute("data-icon-overlay", "open");
      }
    }
  };

  const [MyclassName, setMyClass] = useState("");
  const Containerclick = () => {
    if (localStorage.getItem("nowaverticalstyles") == "icontext") {
      setMyClass("");
    }
    const theme = store.getState();
    if (window.innerWidth > 992) {
      if (theme.iconOverlay === "open") {
        ThemeChanger({ ...theme, iconOverlay: "" });
      }
    }
  };

  function handleAttributeChange(mutationsList) {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        (mutation.attributeName === "data-nav-layout" ||
          mutation.attributeName === "data-vertical-style")
      ) {
        const newValue = mutation.target.getAttribute("data-nav-layout");
        if (newValue == "vertical") {
          let currentPath = location.pathname.endsWith("/")
            ? location.pathname.slice(0, -1)
            : location.pathname;
          currentPath = !currentPath ? "admin/dashboard/crypto/" : currentPath;
          setMenuUsingUrl(currentPath);
        } else {
          closeMenuFn();
        }
      }
    }
  }

  return (
    <Fragment>
      <div id="responsive-overlay" onClick={() => menuClose()}></div>
      <aside
        className="app-sidebar sticky"
        id="sidebar"
        onMouseEnter={() => Onhover()}
        onMouseLeave={() => Outhover()}
      >
        <div className="main-sidebar-header">
          <Link className="header-logo active" href={"/admin/dashboard/"}>
            <img src="/escarpasLogo.jpeg" alt="logo" className="desktop-logo" />
            <img src="/escarpasLogo.jpeg" alt="logo" className="toggle-logo" />
            <img src="/escarpasLogo.jpeg" alt="logo" className="desktop-dark" />
            <img src="/escarpasLogo.jpeg" alt="logo" className="toggle-dark" />
            <img
              src="/escarpasLogo.jpeg"
              alt="logo"
              className="desktop-white"
            />
            <img src="/escarpasLogo.jpeg" alt="logo" className="toggle-white" />
          </Link>
        </div>

        <SimpleBar
          style={{ height: "100%" }}
          className="main-sidebar"
          id="sidebar-scroll"
        >
          <nav className="main-menu-container nav nav-pills flex-column sub-open">
            <div
              className="slide-left"
              id="slide-left"
              onClick={() => {
                slideLeft();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#7b8191"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                {" "}
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>{" "}
              </svg>
            </div>

            <ul className="main-menu" onClick={() => Sideclick()}>
              {menuitems.map((levelone, index) => (
                <Fragment key={index}>
                  <li
                    className={`${levelone.menutitle ? "slide__category" : ""} 
                ${levelone.type === "link" ? "slide" : ""} 
                ${levelone.type === "sub" ? "slide has-sub" : ""} 
                ${isSpecialActive(levelone.title) ? "active" : ""}`}
                  >
                    {levelone.menutitle ? (
                      <span className="category-name">
                        {levelone.menutitle}
                      </span>
                    ) : (
                      ""
                    )}

                    {levelone.type === "link" ? (
                      <Link
                        href={levelone.path}
                        className={`side-menu__item ${
                          isSpecialActive(levelone.title) ? "active" : ""
                        }`}
                      >
                        <span
                          className={`${
                            local_varaiable?.dataVerticalStyle == "doublemenu"
                              ? ""
                              : "d-none"
                          }`}
                        >
                          <OverlayTrigger
                            placement="right"
                            overlay={<Tooltip>{levelone.title}</Tooltip>}
                          >
                            <div>{levelone.icon}</div>
                          </OverlayTrigger>
                        </span>
                        {local_varaiable.dataVerticalStyle !== "doublemenu"
                          ? levelone.icon
                          : ""}
                        <span className="side-menu__label">
                          {levelone.title}
                          {levelone.badgetxt ? (
                            <span className={levelone.class}>
                              {" "}
                              {levelone.badgetxt}
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                      </Link>
                    ) : (
                      ""
                    )}

                    {/* if Sub level */}
                    {levelone.type === "sub" ? (
                      <Menuloop
                        MENUITEMS={levelone}
                        level={level + 1}
                        toggleSidemenu={toggleSidemenu}
                        HoverToggleInnerMenuFn={HoverToggleInnerMenuFn}
                      />
                    ) : (
                      ""
                    )}
                  </li>
                </Fragment>
              ))}
            </ul>

            <div
              className="slide-right"
              id="slide-right"
              onClick={() => {
                slideRight();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#7b8191"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                {" "}
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>{" "}
              </svg>
            </div>
          </nav>
        </SimpleBar>
      </aside>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  local_varaiable: state,
});

export default connect(mapStateToProps, { ThemeChanger })(Sidebar);
