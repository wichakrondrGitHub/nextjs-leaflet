"use client";
import React from "react";
import styled from "styled-components";
import MapWithSync from "@/components/map/MapWithSync.tsx";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const PanelWrapper = styled(PanelResizeHandle)`
  flex: 0 0 1.5em;
  position: relative;
  outline: none;
  background-color: transparent;
`;

const ResizeHandleBackground = styled.div`
  position: absolute;
  top: 0.25em;
  bottom: 0.25em;
  left: 0.25em;
  right: 0.25em;
  border-radius: 0.25em;
  background-color: var(--background-color);
  transition: background-color 0.2s linear;
`;

const StyledSvg = styled.svg`
  width: 1em;
  height: 1em;
  position: absolute;
  left: calc(50% - 0.5rem);
  top: calc(50% - 0.5rem);
`;
const StyledPanel = styled(Panel)`
  background-color: #f0f0f0;
`;

export const MapResizable = () => {
  return (
    <>
      <PanelGroup
        style={{ height: "100vh" }}
        autoSaveId="example"
        direction="vertical"
      >
        <Panel minSize={0} defaultSize={100}>
          <MapWithSync />
        </Panel>
        <PanelWrapper>
          <ResizeHandleBackground>
            <StyledSvg viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z"
              />
            </StyledSvg>
          </ResizeHandleBackground>
        </PanelWrapper>
        <>
          <StyledPanel minSize={0} defaultSize={25}>
            content
          </StyledPanel>
        </>
      </PanelGroup>
    </>
  );
};
