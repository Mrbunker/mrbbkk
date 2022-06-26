import styled from "styled-components";
import { useRef, useState } from "preact/hooks";
import { Wrapper, TextItem, Link } from "./testStyle";
interface site {
  name: string;
  url: string;
  icon?: string;
}

const SiteItem = ({ url, icon, name }: site) => {
  return (
    <Link href={url}>
      <svg
        className="icon"
        aria-hidden="true"
      >
        <use xlinkHref={`#icon-${icon}`}></use>
      </svg>
      <span>{name}</span>
    </Link>
  );
};

export const Text = () => {
  const siteList: site[] = [
    {
      name: "blog",
      url: "https://www.wolai.com/make/hjBcXtr6heELoJKk3K1weN",
      icon: "blog",
    },
    {
      name: "github",
      url: "https://mrbbkk.ml/github.com/",
      icon: "github",
    },
    {
      name: "weibo",
      url: "https://weibo.com/",
      icon: "weibo",
    },
    {
      name: "mail",
      url: "mailto://mrbunker@qq.com",
      icon: "email",
    },
    {
      name: "telegram",
      url: "https://t.me/",
      icon: "telegram",
    },
  ];

  const audioRef = useRef<HTMLAudioElement>(null);
  const playAudio = () => {
    if (!audioRef.current) {
      return;
    }
    audioRef.current.play();
  };

  return (
    <Wrapper>
      <div style={{ width: "70%" }}>
        <TextItem
          className="title"
          fs={4}
          fw={true}
        >
          {"this guy is "}
          <span
            className="highlight"
            onClick={playAudio}
          >
            {"mrbbkk"}
          </span>
        </TextItem>
        <TextItem mt={2}>
          {siteList.map((item) => {
            return (
              <SiteItem
                url={item.url}
                name={item.name}
                icon={item?.icon}
              />
            );
          })}
        </TextItem>
        <TextItem mt={4}>"Be curious, not judgmental."</TextItem>
      </div>
      <audio
        ref={audioRef}
        src="/hei.aac"
      ></audio>
    </Wrapper>
  );
};
